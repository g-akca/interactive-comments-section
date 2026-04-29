import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";

function CommentCard() {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
      <CommentHeader />

      <p>
        Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. 
        You’ve nailed the design and the responsiveness at various breakpoints works really well.
      </p>

      <CommentActions />
    </div>
  )
}

export default CommentCard;