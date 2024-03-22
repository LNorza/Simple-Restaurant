import {useEffect, useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import edit from "../../assets/Images/edit.svg";
import trash from "../../assets/Images/trash.svg";
import "./personal.css";
import {UpdateModal} from "../../components/employee-modal/UpdateModal.jsx";

export function PersonalPage() {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true); // Estado para controlar la carga
	const [showModal, setShowModal] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	async function fetchData() {
		const result = await fetch(
			"https://simplerestaurant-api-production.up.railway.app/api/employees"
		).then((response) => response.json());
		setState(result);
		setLoading(false); // Una vez que se cargan los datos, establece loading en false
	}

	useEffect(() => {
		fetchData();
	}, []);

	function handleOpenModal(employeeID) {
		setSelectedEmployee(employeeID);
		setShowModal(true);
	}

	function handleCloseModal() {
		setShowModal(false);
		setSelectedEmployee(null);
	}

	return (
		<div className="personal-page">
			<Header />
			<div className="menu-container">
				<Navbar />
				{/* Mostrar el loader solo si loading es true */}
				{loading && (
					<div className="loader">
						<div class="jelly-triangle">
							<div class="jelly-triangle__dot"></div>
							<div class="jelly-triangle__traveler"></div>
						</div>

						<svg width="0" height="0" class="jelly-maker">
							<defs>
								<filter id="uib-jelly-triangle-ooze">
									<feGaussianBlur
										in="SourceGraphic"
										stdDeviation="7.3"
										result="blur"
									></feGaussianBlur>
									<feColorMatrix
										in="blur"
										mode="matrix"
										values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
										result="ooze"
									></feColorMatrix>
									<feBlend
										in="SourceGraphic"
										in2="ooze"
									></feBlend>
								</filter>
							</defs>
						</svg>
					</div>
				)}
				{/* Mostrar la tabla solo si loading es false */}
				{!loading && (
					<div className="principal-container">
						<div className="header-container">
							<h2>Gestión de personal</h2>
						</div>
						<div className="contenedor-tabla">
							<div className="tabla">
								<div className="tabla-encabezado">
									<div className="texto-encabezado">
										Nombre
									</div>
									<div className="texto-encabezado">NSS</div>
									<div className="texto-encabezado">RFC</div>
									<div className="texto-encabezado">
										Telefono
									</div>
								</div>
								<div className="contenedor-datos">
									{state.map((employee) => (
										<div
											className="datos"
											key={employee.IDEmpleado}
										>
											<span>
												{employee.NombreEmp}{" "}
												{employee.ApellidosEmp}
											</span>
											<span>{employee.NSS}</span>
											<span>{employee.RFC}</span>
											<span>{employee.Telefono}</span>
											<div className="boton-container">
												<button
													className="button"
													onClick={() =>
														handleOpenModal(
															employee.IDEmpleado
														)
													}
												>
													<img src={edit} alt="" />
												</button>
												<button
													className="button"
													onClick={() =>
														handleOpenModal(
															employee.IDEmpleado
														)
													}
												>
													<img src={trash} alt="" />
												</button>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<UpdateModal
				isOpen={showModal}
				onClose={handleCloseModal}
				employeeID={selectedEmployee}
			/>
		</div>
	);
}
