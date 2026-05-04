import { useState } from "react";
import DeleteIcon from "./icons/DeleteIcon";
import DeleteModal from "./DeleteModal";

function DeleteButton({ onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)} className="flex gap-2 items-center text-pink-400 hover:text-pink-200 cursor-pointer transition-all">
        <DeleteIcon />
        <span className="font-medium">Delete</span>
      </button>

      {isModalOpen && (
        <DeleteModal
          onCancel={() => setIsModalOpen(false)}
          onDelete={onDelete}
        />
      )}
    </>
  )
}

export default DeleteButton;