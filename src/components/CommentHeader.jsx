function CommentHeader({ createdAt, user, isOwn }) {
  return (
    <div className="flex gap-4 items-center">
      <img src={user.image.png} alt="Avatar image" className="w-8 aspect-square rounded-full" />

      <div className="flex gap-2 items-center">
        <span className="text-grey-800 font-medium">{user.username}</span>
        {isOwn && (
          <span className="w-9 h-4.75 bg-purple-600 rounded-xs flex justify-center items-center text-white font-medium lowercase text-[13px] leading-[120%]">You</span>
        )}
      </div>

      <span>{createdAt}</span>
    </div>
  )
}

export default CommentHeader;