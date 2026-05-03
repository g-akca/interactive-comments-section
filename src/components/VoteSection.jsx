import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";
import { useComments } from "../context/CommentsContext";

function VoteSection({ comment }) {
  const { voteComment } = useComments();

  return (
    <div className="bg-grey-50 w-25 h-10 px-2.25 rounded-[10px] flex justify-between items-center gap-4">
      <img
        src={plusIcon}
        alt="Plus icon"
        onClick={() => voteComment(comment.id, "up")}
      />

      <span className="font-medium text-purple-600">{comment.score}</span>

      <img
        src={minusIcon}
        alt="Minus icon"
        onClick={() => voteComment(comment.id, "down")}
      />
    </div>
  )
}

export default VoteSection;