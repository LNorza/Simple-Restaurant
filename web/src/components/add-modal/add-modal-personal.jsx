import React, {useState} from "react";
import CustomSelect from "../custom-select/custom-select";
import {BASE_URL} from "../../utilities/petitionConst.js";

const AddModalPersonal = ({onClose}) => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [jobID, setJobID] = useState(1);
	const [lastName, setLastName] = useState("");
	const [nss, setNss] = useState("");
	const [rfc, setRfc] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [salary, setSalary] = useState("");

	const statusOptions = [
		{value: "1", label: "Chef"},
		{value: "2", label: "Camarero"},
		{value: "3", label: "Cajero"},
		{value: "4", label: "Cocinero"},
		{value: "5", label: "Gerente"},
	];

	const addEmployee = () => {
		const currentDate = new Date().toISOString().slice(0, 10);
		const newEmployee = {
			NombreEmp: name,
			IDPuesto: jobID,
			ApellidosEmp: lastName,
			NSS: nss,
			RFC: rfc,
			Telefono: phone,
			Direccion: address,
			Email: email,
			FechaContratacion: currentDate,
			Salario: salary,
		};

		fetch(`${BASE_URL}/employees`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newEmployee), // Cambiado de newDish a newEmployee
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Nuevo empleado creado:", data);
				onClose(); // Cerrar el modal después de guardar exitosamente
			})
			.catch((error) => {
				console.error("Error al guardar el empleado:", error);
			});
	};

	const onCloseModal = () => {
		onClose();
	};

	const selectGroup = (option) => {
		setJob(option.label);
		setJobID(option.value);
		console.log(option);
	};

	return (
		<div className="modal">
			<div onClick={onCloseModal} className="overlay"></div>
			<div className="modal-container">
				<div className="modal-header">
					Agregar empleado
					<button onClick={onCloseModal}>✖</button>
				</div>

				<div className="modal-form-content">
					<div className="container-inputs-emp">
						<div>
							<label htmlFor="name">Nombre</label>
							<input
								type="text"
								className="form-input"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="lastName">Apellidos</label>
							<input
								type="text"
								className="form-input"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className="select">
						<label>Puesto</label>
						<CustomSelect
							options={statusOptions}
							onOptionChange={selectGroup}
						/>
					</div>
					<div className="container-inputs-emp">
						<div>
							<label htmlFor="nss">NSS</label>
							<input
								type="text"
								className="form-input"
								value={nss}
								onChange={(e) => setNss(e.target.value)}
							/>
						</div>

						<div>
							<label htmlFor="rfc">RFC</label>
							<input
								type="text"
								className="form-input"
								value={rfc}
								onChange={(e) => setRfc(e.target.value)}
							/>
						</div>
					</div>
					<div className="container-inputs-emp">
						<div>
							<label htmlFor="phone">Teléfono</label>
							<input
								type="text"
								className="form-input"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="address">Dirección</label>
							<input
								type="text"
								className="form-input"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
						</div>
					</div>
					<div className="container-inputs-emp">
						<div>
							<label htmlFor="email">Email</label>
							<input
								type="text"
								className="form-input"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor="email">Salario</label>
							<input
								type="text"
								className="form-input"
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="form-button-container">
					<button type="submit" className="form-button" onClick={addEmployee}>
						Agregar empleado
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddModalPersonal;
