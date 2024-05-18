import React, { useEffect, useState } from "react";
import "./modal-custom.css";

const ModalCustom = (props) => {

    const { isOpen, onClose, page, typeModal, idSelected, headerData, totalData } = props;
    if (!isOpen) return;

    const dataItem = totalData.find((data) => data.id === idSelected);
    console.log('dataItem', dataItem);

    const [formData, setFormData] = useState({});
    const [isDeleteModal, setIsDeleteModal] = useState(false);
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

    const onCloseModal = () => {
        onClose();
    };

    useEffect(() => {
        if (typeModal === "delete") {
            setIsDeleteModal(true);
        } else {
            setIsDeleteModal(false);
        }
    }, [typeModal, dataItem]);

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
            <div onClick={onCloseModal} className="overlay"></div>
            <div className="modal-custom-container">
                <div className="modal-custom-header">
                    {typeModal === "update" ? `Editar` : `Eliminar`}
                    <button onClick={onCloseModal}>✖</button>

                </div>

                {isDeleteModal && (
                    <div className="modal-custom-form-content-delete">
                        <p className="delete-title">¿Estás seguro?</p>

                        {page === "Producto" &&
                            <p> Estás a punto de borrar el producto {dataItem.product},
                                ¿Deseas continuar?
                            </p>
                        }

                        {page === "Comandas" &&
                            <p> Estás a punto de borrar la comanda con el numero de cuenta "{dataItem.id}",
                                ¿Deseas continuar?
                            </p>
                        }

                        {page === "platillo" &&
                            <p> Estás a punto de borrar el platillo {dataItem.dish},
                                ¿Deseas continuar?
                            </p>
                        }


                        <div className="modal-custom-delete-btn">
                            <button onClick={onCloseModal} className="btn btn-cancel">
                                Cancelar
                            </button>

                            <button onClick={handleAction} className="btn btn-delete">
                                Eliminar
                            </button>
                        </div>
                    </div>
                )
                }

                {!isDeleteModal &&
                    <>
                        {headerData.map((column) => (
                            <div key={`${column.id}`} className="modal-custom-form-content">

                                <div className="modal-custom-input">
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
                        ))}
                        <div className="form-custom-button-container">
                            <button type="button" className="form-custom-button" onClick={handleAction}>
                                {typeModal === "update" ? "Actualizar" : "Eliminar"}
                            </button>
                        </div>
                    </>
                }
            </div>
        </div >
    );
};

export default ModalCustom;
