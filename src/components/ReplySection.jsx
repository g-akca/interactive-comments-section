import CommentCard from "./CommentCard";

function ReplySection({ replies }) {
  return (
    <div className="grid grid-cols-[2px_1fr] gap-4">
      <div className="w-full bg-grey-100" />

      <div className="flex flex-col gap-4">
        {replies.map(reply => (
          <CommentCard
            key={reply.id}
            comment={reply}
          />
        ))}
      </div>
    </div>
  )
}

export default ReplySection;