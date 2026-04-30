import CommentCard from "./CommentCard";

function ReplySection() {
  return (
    <div className="grid grid-cols-[2px_1fr] gap-4">
      <div className="w-full bg-grey-100" />

      <div className="flex flex-col gap-4">
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  )
}

export default ReplySection;