import DeleteButton from "./ui/DeleteButton";
import EditButton from "./ui/EditButton";
import ReplyButton from "./ui/ReplyButton";
import useTimeAgo from "../hooks/useTimeAgo";

function CommentHeader({ createdAt, user, isOwn, onReply, onDelete, onEdit }) {
  const timeLabel = useTimeAgo(createdAt);

  return (
    <div className="flex gap-4 justify-between">
      <div className="flex gap-4 items-center">
        <img src={user.image.png} alt="Avatar image" className="w-8 aspect-square rounded-full" />

        <div className="flex gap-2 items-center">
          <span className="text-grey-800 font-medium">{user.username}</span>
          
          {isOwn && (
            <span 
              className="w-9 h-4.75 bg-purple-600 rounded-xs flex justify-center items-center 
              text-white font-medium lowercase text-[13px] leading-[120%]"
            >
              You
            </span>
          )}
        </div>

        <span>{timeLabel}</span>
      </div>
      
      <div className="hidden tablet:flex gap-6 items-center">
        {isOwn ? (
          <>
            <DeleteButton onDelete={onDelete} />
            <EditButton onClick={onEdit} />
          </>
        ) : (
          <ReplyButton onClick={onReply} />
        )}
      </div>
    </div>
  )
}

export default CommentHeader;