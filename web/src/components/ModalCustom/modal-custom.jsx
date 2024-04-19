import React, { useState } from "react";
import "./modal-custom.css";

const ModalCustom = ({ isOpen, onClose, page, typeModal, idSelected, headerData, totalData }) => {
    if (!isOpen) return null;

    const dataItem = totalData.find((data) => data.id === idSelected);
    const [formData, setFormData] = useState({});
    console.log(formData);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAction = () => {
        if (typeModal === "update") {
            console.log(`Realizar actualización para el ID: ${idSelected}`);
        } else if (typeModal === "delete") {
            console.log(`Realizar eliminación para el ID: ${idSelected}`);
        }
        onClose(); // Cerrar modal después de realizar la acción
    };

    const addClass = (dataKey) => {
        if (dataKey == "mesa") {
            return "modal-custom-form-content-50 float-left";
        }
        if (dataKey == "hora") {
            return "modal-custom-form-content-50 float-right";
        }
    };

    return (
        <div className="modal-custom">
            <div onClick={onClose} className="overlay"></div>
            <div className="modal-custom-container">
                <div className="modal-custom-header">
                    {typeModal === "update" ? `Editar ${page}` : `Eliminar ${page}`}
                    <button onClick={onClose}>✖</button>
                </div>

                {headerData.map((column) => (
                    <div
                        className={`modal-custom-form-content ${
                            column.dataKey == "mesa" || column.dataKey == "hora" ? addClass(column.dataKey) : ""
                        }`}
                    >
                        <div key={`${idSelected}-${column.id}`}>
                            <div className={`modal-custom-input`}>
                                <label htmlFor={column.dataKey}>{column.title}</label>
                                <input
                                    type="text"
                                    value={dataItem[column.dataKey]}
                                    className="form-input"
                                    onChange={handleInputChange}
                                    disabled={typeModal === "delete"}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <div className="form-custom-button-container">
                    <button type="button" className="form-custom-button" onClick={handleAction}>
                        {typeModal === "update" ? "Actualizar" : "Eliminar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalCustom;
