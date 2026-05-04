import { useState } from "react";
import PostButton from "./PostButton";

function EditForm({ original, editComment, closeForm }) {
  const [newComment, setNewComment] = useState(original);

  function handleSubmit(e) {
    e.preventDefault();
    if (!newComment.trim()) return;

    editComment(newComment);
    closeForm();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea 
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Edit your comment..." 
        className="
          px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
          text-grey-800 caret-purple-600 duration-150 focus:outline-none focus:border-purple-600
        "
      >
      </textarea>

      <PostButton
        isDisabled={!newComment.trim()}
        innerText="Update"
        className="self-end"
      />      
    </form>
  )
}

export default EditForm;