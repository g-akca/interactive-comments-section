import editIcon from "/images/icon-edit.svg";

function EditButton() {
  return (
    <button type="button" className="flex gap-2 items-center">
      <img src={editIcon} alt="Edit icon" className="w-3.5" />
      <span className="text-purple-600 font-medium">Edit</span>
    </button>
  )
}

export default EditButton;