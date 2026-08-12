import { createContext, useContext, useState, useEffect } from "react";
import data from "../data/data.json";

const CommentsContext = createContext();

function safeParse(key, fallback, isValid) {
  const saved = localStorage.getItem(key);

  if (!saved) return fallback;

  try {
    const parsed = JSON.parse(saved);

    return isValid(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

const isPlainObject = value => typeof value === "object" && value !== null && !Array.isArray(value);

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState(() => safeParse("comments", data.comments, Array.isArray));

  const [currentUser] = useState(() => safeParse("currentUser", data.currentUser, isPlainObject));

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  function addComment({ topId = 0, content = "", createdAt = new Date().toISOString() }) {
    function findMaxId(comments) {
      let maxId = 0;

      comments.forEach(comment => {
        if (comment.id > maxId) maxId = comment.id;

        if (comment.replies) {
          comment.replies.forEach(reply => {
            if (reply.id > maxId) maxId = reply.id;
          });
        }
      });

      return maxId;
    }

    function addReply(list, newComment) {
      return list.map(comment => {
        const isTopComment = comment.id === topId;

        const isReplyInside = (comment.replies || []).some(reply => reply.id === topId);

        if (isTopComment || isReplyInside) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newComment]
          };
        }

        return comment;
      });
    }

    function findUserById(comments, id) {
      for (const comment of comments) {
        if (comment.id === id) return comment.user.username;

        for (const reply of comment.replies || []) {
          if (reply.id === id) return reply.user.username;
        }
      }
      
      return null;
    }

    setComments(prevComments => {
      const replyingTo = topId > 0 ? findUserById(prevComments, topId) : null;

      const newComment = {
        id: findMaxId(prevComments) + 1,
        content,
        createdAt,
        score: 0,
        user: currentUser,
        replies: [],
        ...(replyingTo && { replyingTo })
      }

      if (topId <= 0) return [...prevComments, newComment];

      return addReply(prevComments, newComment);
    });
  }

  function deleteComment(id) {
    setComments(prevComments =>
      prevComments
        .filter(comment => comment.id !== id)
        .map(comment => ({
          ...comment,
          replies: (comment.replies || []).filter(reply => reply.id !== id)
        }))
    );
  }

  function editComment(id, newContent) {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) return { ...comment, content: newContent }

        const updatedReplies = (comment.replies || []).map(reply =>
          reply.id === id
            ? { ...reply, content: newContent }
            : reply
        );

        return { ...comment, replies: updatedReplies }
      })
    );
  }

  function voteComment(id, type) {
    function update(comment) {
      let score = comment.score;
      let upVoted = comment.upVoted || false;
      let downVoted = comment.downVoted || false;

      if (type === "up") {
        if (upVoted) {
          score -= 1;
          upVoted = false;
        }
        else {
          score += downVoted ? 2 : 1;
          upVoted = true;
          downVoted = false;
        }
      }

      if (type === "down") {
        if (downVoted) {
          score += 1;
          downVoted = false;
        }
        else {
          score -= upVoted ? 2 : 1;
          upVoted = false;
          downVoted = true;
        }
      }

      return { ...comment, score, upVoted, downVoted };
    }

    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) return update(comment);

        return {
          ...comment,
          replies: (comment.replies || []).map(reply =>
            reply.id === id ? update(reply) : reply
          )
        }
      })
    );
  }
  
  return (
    <CommentsContext.Provider value={{ comments, currentUser, addComment, deleteComment, editComment, voteComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentsContext);
}