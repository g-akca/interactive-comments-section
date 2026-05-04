import { useState } from "react";
import PostButton from "./PostButton";

function EditForm({ original, replyingTo, editComment, closeForm }) {
  const mention = replyingTo ? `@${replyingTo} ` : "";

  const [newComment, setNewComment] = useState(mention ? mention + original : original);

  function handleChange(e) {
    let value = e.target.value;

    if (mention && !value.startsWith(mention)) {
      value = mention;
    }

    setNewComment(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newComment.trim()) return;

    let cleanContent = newComment;

    if (mention && newComment.startsWith(mention)) {
      cleanContent = newComment.slice(mention.length);
    }

    editComment(cleanContent);
    closeForm();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea 
        value={newComment}
        onChange={handleChange}
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