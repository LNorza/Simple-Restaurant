import React, {useState} from "react";
import CustomSelect from "../custom-select/custom-select";

const DeleteModal = ({
	onClose,
	employeeID,
	employeeName,
	deleteFunction,
	message,
}) => {
	const deleteEmployee = async () => {
		try {
			const response = await fetch(`${BASE_URL}/employees/${employeeID}`, {
				method: "DELETE",
			});
			onClose();
		} catch (error) {
			console.error("Error al eliminar el empleado:", error);
		}
	};

	const onCloseModal = () => {
		onClose();
	};

	const handleAction = () => {
		deleteFunction(employeeID);
		onClose();
	};

	return (
		<div className="modal-custom">
			<div onClick={onCloseModal} className="overlay"></div>
			<div className="modal-custom-container">
				<div className="modal-custom-header">
					Eliminar
					<button onClick={onClose}>✖</button>
				</div>
				<div className="modal-custom-form-content-delete">
					<p className="delete-title">¿Estás seguro?</p>
					<p>Estás a punto de borrar {message}, ¿Deseas continuar?</p>
					<div className="modal-custom-delete-btn">
						<button onClick={onCloseModal} className="btn btn-cancel">
							Cancelar
						</button>
						<button onClick={handleAction} className="btn btn-delete">
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteModal;
