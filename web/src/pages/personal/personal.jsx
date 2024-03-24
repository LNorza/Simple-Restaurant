import {useEffect, useState} from "react";
import Header from "../../components/header/header.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import edit from "../../assets/Images/edit.svg";
import trash from "../../assets/Images/trash.svg";
import "./personal.css";
import {UpdateModal} from "../../components/employee-modal/UpdateModal.jsx";
import {usePersonalDB} from "../../hooks/usePersonalDB.js";
import {Loading} from "../../components/Loading/Loading.jsx";

export function PersonalPage() {
    const {personal, isLoading} = usePersonalDB();
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

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

                            {isLoading && <Loading />}

                            <div className="contenedor-datos">
                                {personal.map((employee) => (
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

            <UpdateModal
                isOpen={showModal}
                onClose={handleCloseModal}
                employeeID={selectedEmployee}
            />
        </div>
    );
}
