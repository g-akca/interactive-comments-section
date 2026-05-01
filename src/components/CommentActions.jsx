import VoteSection from "./VoteSection";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ReplyButton from "./ReplyButton";

function CommentActions({ score, isOwn }) {
  return (
    <div className="flex justify-between items-center">
      <VoteSection score={score} />

      {isOwn ? (
        <div className="flex gap-4 items-center">
          <DeleteButton />
          <EditButton />
        </div>
      ) : (
        <ReplyButton />
      )}
    </div>
  )
}

export default CommentActions;