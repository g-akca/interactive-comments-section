import avatar from "/images/avatars/image-amyrobson.png";

function CommentHeader() {
  return (
    <div className="flex gap-4 items-center text-[16px] leading-base">
      <img src={avatar} alt="Avatar image" className="w-8 aspect-square rounded-full" />
      <span className="text-grey-800 font-medium">amyrobson</span>
      <span>1 month ago</span>
    </div>
  )
}

export default CommentHeader;