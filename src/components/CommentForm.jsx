import { useComments } from "../context/CommentsContext";
import { useState } from "react";
import avatarImg from "/images/avatars/image-juliusomo.png";
import React from "react";
import PostButton from "./PostButton";

function CommentForm({ topId = 0, closeForm }) {
  const { addComment } = useComments();
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) return;

    addComment({ topId, content });
    setContent("");
    closeForm();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white px-4 py-[14.5px] tablet:p-6 rounded-lg">
      <div className="flex flex-col gap-4 tablet:hidden">
        <textarea 
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Add a comment..." 
          className="
            px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
            text-grey-800 caret-purple-600 duration-150 focus:outline-none focus:border-purple-600
          "
        >
        </textarea>

        <div className="flex justify-between items-center">
          <img src={avatarImg} alt="Avatar image" className="w-8 aspect-square rounded-full" />

          <PostButton
            isDisabled={!content.trim()}
            innerText={topId !== 0 ? "Reply" : "Send"}
          />
        </div>
      </div>

      <div className="hidden flex-row gap-4 items-start tablet:flex">
        <img src={avatarImg} alt="Avatar image" className="w-10 aspect-square rounded-full" />

        <textarea 
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Add a comment..." 
          className="
            grow px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
            text-grey-800 caret-purple-600 duration-150 focus:outline-none focus:border-purple-600
          "
        >
        </textarea>

        <PostButton
          isDisabled={!content.trim()}
          innerText={topId !== 0 ? "Reply" : "Send"}
        />
      </div>
    </form>
  )
}

export default CommentForm;