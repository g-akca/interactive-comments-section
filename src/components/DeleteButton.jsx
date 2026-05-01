import { useState } from "react";
import deleteIcon from "/images/icon-delete.svg";
import DeleteModal from "./DeleteModal";

function DeleteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)} className="flex gap-2 items-center">
        <img src={deleteIcon} alt="Delete icon" className="h-3.5" />
        <span className="text-pink-400 font-medium">Delete</span>
      </button>

      {isModalOpen && (
        <DeleteModal />
      )}
    </>
  )
}

export default DeleteButton;