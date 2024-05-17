import {useState, useEffect} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import {Trash2, SquarePen} from "lucide-react";
import "./personal.css";
import {UpdateModal} from "../../components/employee-modal/UpdateModal.jsx";
import {usePersonalDB} from "../../hooks/usePersonalDB.js";
import {Loading} from "../../components/Loading/Loading.jsx";
import {AddButton} from "../../components/add-button/add-button.jsx";
import {SearchForm} from "../../components/search-form/search-form.jsx";

export function PersonalPage() {
	const [personal, setPersonal] = useState([]);
	const [originalPersonal, setOriginalPersonal] = useState([]);
	const [isLoading, setLoading] = useState(true); // Estado para controlar la carga

	async function fetchData() {
		const result = await fetch(
			"https://simplerestaurant-api-production.up.railway.app/api/employees"
		).then((response) => response.json());
		setPersonal(result);
		setOriginalPersonal(result);
		setLoading(false); // Una vez que se cargan los datos, establece loading en false
	}

	useEffect(() => {
		fetchData();
	}, []);

	const allEmployees = originalPersonal;
	const [showModal, setShowModal] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	const handleSearch = (searchTerm) => {
		console.log(allEmployees);
		const searchedEmployees = allEmployees.filter(
			(employee) =>
				employee.NombreEmp.toLowerCase().includes(searchTerm.toLowerCase()) ||
				employee.ApellidosEmp.toLowerCase().includes(
					searchTerm.toLowerCase()
				) ||
				employee.NSS.toLowerCase().includes(searchTerm.toLowerCase()) ||
				employee.RFC.toLowerCase().includes(searchTerm.toLowerCase()) ||
				employee.Telefono.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setPersonal(searchedEmployees);
	};

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

				<div className="principal-container">
					<div className="header-container">
						<h2>Gestión de personal</h2>
						<div className="search">
							<SearchForm
								placeholder="Buscar empleado..."
								onSearch={handleSearch}
							/>
							<AddButton message="Agregar Empleado" />
						</div>
					</div>

					<div className="contenedor-tabla">
						<div className="tabla">
							<div className="tabla-encabezado">
								<div className="texto-encabezado">Nombre</div>
								<div className="texto-encabezado">NSS</div>
								<div className="texto-encabezado">RFC</div>
								<div className="texto-encabezado">Telefono</div>
							</div>

							{/* Component Loading when "isLoading" is true: */}
							{isLoading && <Loading />}

							<div className="contenedor-datos">
								<>
									{personal.map((employee) => (
										<div className="datos" key={employee.IDEmpleado}>
											<span>
												{employee.NombreEmp} {employee.ApellidosEmp}
											</span>
											<span>{employee.NSS}</span>
											<span>{employee.RFC}</span>
											<span>{employee.Telefono}</span>
											<div className="boton-container">
												<button
													className="button"
													onClick={() => handleOpenModal(employee.IDEmpleado)}
												>
													<SquarePen size={28} color="#294B69" />
												</button>
												<button
													className="button"
													onClick={() => handleOpenModal(employee.IDEmpleado)}
												>
													<Trash2 color="#294B69" size={28} />
												</button>
											</div>
										</div>
									))}
								</>
							</div>
						</div>
					</div>
				</div>
			</div>

			<UpdateModal
				isOpen={showModal}
				onClose={handleCloseModal}
				employeeID={selectedEmployee}
			/>
		</div>
	);
}
