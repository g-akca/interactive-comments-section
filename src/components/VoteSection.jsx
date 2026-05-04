import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";
import { useComments } from "../context/CommentsContext";

function VoteSection({ comment }) {
  const { voteComment } = useComments();

  return (
    <div className="bg-grey-50 w-25 tablet:w-10 h-10 tablet:h-25 px-2.25 tablet:px-1.25 tablet:py-[15.75px] rounded-[10px] flex tablet:flex-col justify-between items-center gap-4 tablet:shrink-0">
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