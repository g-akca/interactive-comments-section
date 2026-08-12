import { useComments } from "/src/context/CommentsContext";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

function VoteSection({ comment }) {
  const { voteComment } = useComments();

  return (
    <div 
      className="
        bg-grey-50 w-25 tablet:w-10 h-10 tablet:h-25 px-2.25 tablet:px-1.25 tablet:py-[15.75px] rounded-[10px] 
        flex tablet:flex-col justify-between items-center gap-4 tablet:shrink-0
      "
    >
      <button type="button" onClick={() => voteComment(comment.id, "up")} aria-label="Upvote comment" aria-pressed={comment.upVoted || false} className="cursor-pointer">
        <PlusIcon 
          aria-hidden="true"
          className={`${comment.upVoted ? "text-purple-600" : "text-purple-200"} hover:text-purple-600 transition-all`}
        />
      </button>

      <span className="font-medium text-purple-600" aria-live="polite" aria-atomic="true">{comment.score}</span>

      <button type="button" onClick={() => voteComment(comment.id, "down")} aria-label="Downvote comment" aria-pressed={comment.downVoted || false} className="cursor-pointer">
        <MinusIcon 
          aria-hidden="true"
          className={`${comment.downVoted ? "text-purple-600" : "text-purple-200"} hover:text-purple-600 transition-all`}
        />
      </button>
    </div>
  )
}

export default VoteSection;