import React from "react";
import "./employee-modal.css";

function EmployeeModal({isOpen, onClose, employeeID, action}) {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="overlay"></div>
			<div className="modal-content">
				<div class="modal-header">
					Editar empleado
					<button onClick={onClose}>✖</button>
				</div>
				<form>
					<p>Empleado ID: {employeeID}</p>
					<div class="form-button-container">
						<button
							type="submit"
							class="form-button"
							onClick={onClose}
						>
							Actualizar empleado
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EmployeeModal;
