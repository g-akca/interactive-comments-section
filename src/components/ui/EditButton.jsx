import EditIcon from "./icons/EditIcon";

function EditButton({ onClick }) {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className="flex gap-2 items-center text-purple-600 hover:text-purple-200 cursor-pointer transition-all"
    >
      <EditIcon />
      <span className="font-medium">Edit</span>
    </button>
  )
}

export default EditButton;