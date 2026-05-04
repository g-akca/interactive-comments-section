import { useComments } from "/src/context/CommentsContext";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

function VoteSection({ comment }) {
  const { voteComment } = useComments();

  return (
    <div className="bg-grey-50 w-25 tablet:w-10 h-10 tablet:h-25 px-2.25 tablet:px-1.25 tablet:py-[15.75px] rounded-[10px] flex tablet:flex-col justify-between items-center gap-4 tablet:shrink-0">
      <button type="button" onClick={() => voteComment(comment.id, "up")} className="cursor-pointer">
        <PlusIcon 
          className={`${comment.upVoted ? "text-purple-600" : "text-purple-200"} hover:text-purple-600 transition-all`}
        />
      </button>

      <span className="font-medium text-purple-600">{comment.score}</span>

      <button type="button" onClick={() => voteComment(comment.id, "down")} className="cursor-pointer">
        <MinusIcon 
          className={`${comment.downVoted ? "text-purple-600" : "text-purple-200"} hover:text-purple-600 transition-all`}
        />
      </button>
    </div>
  )
}

export default VoteSection;