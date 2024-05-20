import { CirclePlus } from "lucide-react";
import "./add-button.css";
import { useState } from "react";
import { AddElement } from "../add-elements/AddElement";

export function AddButton({ message, namePage }) {
    const [showModal, setShowModal] = useState(false);

    function onOpenModal() {
        setShowModal(true);
    }

    function onCloseModal() {
        setShowModal(false);
    }


    return (
        <>
            <button
                className="add-button"
                onClick={() => onOpenModal()}
            >
                <CirclePlus size={20} />
                {message}
            </button>


            {showModal && (
                <AddElement
                    isOpen={showModal}
                    onClose={onCloseModal}
                    page={namePage}
                />
            )}
        </>
    );
}
