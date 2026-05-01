import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

const CommentsContext = createContext();

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState(data.comments);
  const [currentUser, setCurrentUser] = useState(data.currentUser);

  function addComment(content = "", createdAt = "now") {
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

    setComments(prevComments => [
      ...prevComments,
      {
        id: findMaxId(prevComments) + 1,
        content,
        createdAt,
        score: 0,
        user: currentUser,
        replies: []
      }
    ]);
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
  
  return (
    <CommentsContext.Provider value={{ comments, currentUser, addComment, deleteComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentsContext);
}