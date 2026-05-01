import { createContext, useContext, useState } from "react";
import data from "../data/data.json";

const CommentsContext = createContext();

export function CommentsProvider({ children }) {
  const [comments, setComments] = useState(data.comments);
  const [currentUser, setCurrentUser] = useState(data.currentUser);

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
    <CommentsContext.Provider value={{ comments, currentUser, deleteComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export function useComments() {
  return useContext(CommentsContext);
}