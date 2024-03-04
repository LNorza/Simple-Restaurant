import React from "react";
import {useEffect, useState} from "react";
import "./employee-modal.css";

function EmployeeModal({isOpen, onClose, employeeID}) {
	if (!isOpen) return null;
	const [state, setState] = useState([]);

	async function fetchData() {
		const result = await fetch(
			"https://simplerestaurant-api-production.up.railway.app/api/employees/" +
				`${employeeID}`
		).then((response) => response.json());
		setState(result);
	}

	useEffect(() => {
		fetchData();
	}, []);
	console.log(state);

	return (
		<div className="modal">
			<div className="overlay"></div>
			<div className="modal-content">
				<div class="modal-header">
					Editar empleado
					<button onClick={onClose}>✖</button>
				</div>
				<div>
					<input
						type="text"
						value={employeeID}
						className="form-input"
					/>
					<div class="form-button-container">
						<button
							type="submit"
							class="form-button"
							onClick={onClose}
						>
							Actualizar empleado
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmployeeModal;
