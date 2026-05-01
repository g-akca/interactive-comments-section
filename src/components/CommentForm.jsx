import { useComments } from "../context/CommentsContext";
import { useState } from "react";
import avatarImg from "/images/avatars/image-juliusomo.png";

function CommentForm({ topId = 0 }) {
  const { addComment } = useComments();
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    addComment({ content });
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white px-4 py-[14.5px] rounded-lg flex flex-col gap-4">
      <textarea 
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Add a comment..." 
        className="
          px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
          duration-150 focus:outline-none focus:border-purple-600
        "
      >
      </textarea>

      <div className="flex justify-between items-center">
        <img src={avatarImg} alt="Avatar image" className="w-8 aspect-square rounded-full" />
        <button 
          type="submit" 
          className="bg-purple-600 w-26 h-12 rounded-lg flex justify-center items-center font-medium text-white uppercase"
        >
          {topId !== 0 ? "Reply" : "Send"}
        </button>
      </div>
    </form>
  )
}

export default CommentForm;