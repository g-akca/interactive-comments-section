import deleteIcon from "/images/icon-delete.svg";

function DeleteButton() {
  return (
    <button type="button" className="flex gap-2 items-center">
      <img src={deleteIcon} alt="Delete icon" className="h-3.5" />
      <span className="text-pink-400 font-medium">Delete</span>
    </button>
  )
}

export default DeleteButton;