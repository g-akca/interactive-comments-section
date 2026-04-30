import avatarImg from "/images/avatars/image-juliusomo.png";

function CommentForm() {
  return (
    <form className="bg-white px-4 py-[14.5px] rounded-lg flex flex-col gap-4">
      <textarea placeholder="Add a comment..." className="px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 focus:outline-none"></textarea>

      <div className="flex justify-between items-center">
        <img src={avatarImg} alt="Avatar image" className="w-8 aspect-square rounded-full" />
        <button type="submit" className="bg-purple-600 w-26 h-12 rounded-lg flex justify-center items-center font-medium text-white uppercase">Send</button>
      </div>
    </form>
  )
}

export default CommentForm;