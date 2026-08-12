import { useComments } from "../context/CommentsContext";
import { useState } from "react";
import avatarImg from "/images/avatars/image-juliusomo.png";
import PostButton from "./ui/PostButton";

function CommentForm({ topId = 0, replyingTo = "", closeForm }) {
  const { addComment } = useComments();
  const initialText = replyingTo ? `@${replyingTo} ` : "";
  const [content, setContent] = useState(initialText);

  function handleChange(e) {
    let value = e.target.value;

    if (initialText && !value.startsWith(initialText)) {
      value = initialText;
    }

    setContent(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let cleanContent = content;

    if (replyingTo) {
      const mention = `@${replyingTo} `;
      
      if (content.startsWith(mention)) {
        cleanContent = content.slice(mention.length);
      }
    }

    if (!cleanContent.trim()) return;

    addComment({ topId, content: cleanContent });
    setContent("");
    closeForm?.();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white px-4 py-[14.5px] tablet:p-6 rounded-lg">
      <div className="flex flex-col gap-4 tablet:hidden">
        <textarea 
          value={content}
          onChange={handleChange}
          placeholder="Add a comment..." 
          className="
            px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
            text-grey-800 caret-purple-600 duration-150 focus:outline-none focus:border-purple-600
          "
        />

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
          onChange={handleChange}
          placeholder="Add a comment..." 
          className="
            grow px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
            text-grey-800 caret-purple-600 duration-150 focus:outline-none focus:border-purple-600
          "
        />

        <PostButton
          isDisabled={!content.trim()}
          innerText={topId !== 0 ? "Reply" : "Send"}
        />
      </div>
    </form>
  )
}

export default CommentForm;
