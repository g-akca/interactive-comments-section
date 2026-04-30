function CommentHeader({ createdAt, user }) {
  return (
    <div className="flex gap-4 items-center">
      <img src={user.image.png} alt="Avatar image" className="w-8 aspect-square rounded-full" />
      <span className="text-grey-800 font-medium">{user.username}</span>
      <span>{createdAt}</span>
    </div>
  )
}

export default CommentHeader;