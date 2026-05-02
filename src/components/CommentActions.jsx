import VoteSection from "./VoteSection";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ReplyButton from "./ReplyButton";

function CommentActions({ score, isOwn, onReply, onDelete, onEdit }) {
  return (
    <div className="flex justify-between items-center">
      <VoteSection score={score} />

      {isOwn ? (
        <div className="flex gap-4 items-center">
          <DeleteButton onDelete={onDelete} />
          <EditButton onClick={onEdit} />
        </div>
      ) : (
        <ReplyButton onClick={onReply} />
      )}
    </div>
  )
}

export default CommentActions;