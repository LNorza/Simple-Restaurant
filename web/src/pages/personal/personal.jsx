import {useEffect, useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import edit from "../../assets/Images/edit.svg";
import trash from "../../assets/Images/trash.svg";
import "./personal.css";
import {EmployeeModal} from "../../components/employee-modal/EmployeeModal.jsx";

export function PersonalPage() {
    const [state, setState] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    async function fetchData() {
        const result = await fetch(
            "https://simplerestaurant-api-production.up.railway.app/api/employees"
        ).then((response) => response.json());
        setState(result);
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
                <div className="principal-container">
                    <div className="header-container">
                        <h2>Gestión de personal</h2>
                    </div>
                    <div className="contenedor-tabla">
                        <div className="tabla">
                            <div className="tabla-encabezado">
                                <div className="texto-encabezado">Nombre</div>
                                <div className="texto-encabezado">NSS</div>
                                <div className="texto-encabezado">RFC</div>
                                <div className="texto-encabezado">Telefono</div>
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
            </div>
            <EmployeeModal
                isOpen={showModal}
                onClose={handleCloseModal}
                employeeID={selectedEmployee}
            />
        </div>
    );
}
