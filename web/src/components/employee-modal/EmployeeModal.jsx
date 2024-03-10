import {useEffect, useState} from "react";
import "./EmployeeModal.css";

export function EmployeeModal({isOpen, onClose, employeeID}) {
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

	const onCloseModal = () => {
		onClose();
	};

	return (
		<div className="modal">
			<div onClick={onCloseModal} className="overlay"></div>
			<div className="modal-container">
				<div className="modal-header">
					Editar empleado
					<button onClick={onCloseModal}>✖</button>
				</div>

				<div className="modal-form-content">
					<div className="container-inputs-emp">
						<div className="employee-ID">
							<label for="id">Empleado</label>
							<input
								type="text"
								value={employeeID}
								className="form-input"
								disabled
							/>
						</div>
						<div>
							<label for="Stand">Puesto</label>
							<input
								type="text"
								value={state.IDPuesto}
								className="form-input"
							/>
						</div>
					</div>

					<div className="container-inputs-emp">
						<div>
							<label for="name">Nombre</label>
							<input
								type="text"
								value={state.NombreEmp}
								className="form-input"
							/>
						</div>

						<div>
							<label for="lastName">Apellidos</label>
							<input
								type="text"
								value={state.ApellidosEmp}
								className="form-input"
							/>
						</div>
					</div>

					<div className="container-inputs-emp">
						<div>
							<label for="nss">NSS</label>
							<input
								type="text"
								value={state.NSS}
								className="form-input"
							/>
						</div>
						<div>
							<label for="rfc">RFC</label>
							<input
								type="text"
								value={state.RFC}
								className="form-input"
							/>
						</div>
					</div>
					<label for="phone">Teléfono</label>
					<input
						type="text"
						value={state.Telefono}
						className="form-input"
					/>
					<label for="address">Dirección</label>
					<input
						type="text"
						value={state.Direccion}
						className="form-input"
					/>
					<label for="email">Email</label>
					<input
						type="text"
						value={state.Email}
						className="form-input"
					/>
				</div>
				<div className="form-button-container">
					<button
						type="submit"
						className="form-button"
						onClick={onClose}
					>
						Actualizar empleado
					</button>
				</div>
			</div>
		</div>
	);
}
