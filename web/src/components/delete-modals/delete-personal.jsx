import React, {useState} from "react";
import CustomSelect from "../custom-select/custom-select";
import {BASE_URL} from "../../utilities/petitionConst.js";

const DeletePersonal = ({onClose, employeeID, employeeName}) => {
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

	return (
		<div className="modal">
			<div onClick={onCloseModal} className="overlay"></div>
			<div className="modal-container">
				<div className="modal-header">
					<p className="delete-title">¿Estás seguro?</p>
				</div>
				<div className="modal-body">
					<p>
						Estás a punto de borrar el empleado {employeeName}, ¿Deseas
						continuar?
					</p>
				</div>

				<div className="modal-custom-delete-btn">
					<button onClick={onCloseModal} className="btn btn-cancel">
						Cancelar
					</button>

					<button onClick={deleteEmployee} className="btn btn-delete">
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeletePersonal;
