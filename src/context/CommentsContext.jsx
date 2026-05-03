import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

const CommentsContext = createContext();

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState(data.comments);
  const [currentUser, setCurrentUser] = useState(data.currentUser);

  function addComment({ topId = 0, content = "", createdAt = "now" }) {
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

    setComments(prevComments => {
      const newComment = {
        id: findMaxId(prevComments) + 1,
        content,
        createdAt,
        score: 0,
        user: currentUser,
        replies: []
      }

      if (topId <= 0) return [...prevComments, newComment];

      return addReply(prevComments, newComment);
    });
  }

  function deleteComment(id) {
    function removeComment(list) {
      return list.filter(comment => comment.id !== id)
        .map(comment => ({
          ...comment, 
          replies: removeComment(comment.replies || [])
        }));
    }

    setComments(prevComments => removeComment(prevComments));
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
  
  return (
    <CommentsContext.Provider value={{ comments, currentUser, addComment, deleteComment, editComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentsContext);
}