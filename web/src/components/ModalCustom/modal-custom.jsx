import React, {useEffect, useState} from "react";
import "./modal-custom.css";

const ModalCustom = (props) => {
	const {
		isOpen,
		onClose,
		page,
		typeModal,
		idSelected,
		headerData,
		totalData,
		deleteFunction,
		updateFunction,
		useIn,
	} = props;

	if (!isOpen) return null;

	const dataItem = totalData.find((data) => data.id === idSelected);

	const [formData, setFormData] = useState({});
	const [isDeleteModal, setIsDeleteModal] = useState(false);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleAction = () => {
		if (typeModal === "update") {
			console.log(`Realizar actualización para el ID: ${idSelected}`);
			updateFunction(idSelected, formData); // Usar updateFunction en lugar de editFunction
		} else if (typeModal === "delete") {
			deleteFunction(idSelected);
		}
		onClose();
	};

	useEffect(() => {
		if (typeModal === "delete") {
			setIsDeleteModal(true);
		} else {
			setIsDeleteModal(false);
		}
	}, [typeModal]);

	useEffect(() => {
		if (dataItem) {
			const formDataCopy = {};
			headerData.forEach((column) => {
				formDataCopy[column.dataKey] = dataItem[column.dataKey];
			});
			setFormData(formDataCopy);
		}
	}, [dataItem, headerData]);

	return (
		<div className="modal-custom">
			<div onClick={onClose} className="overlay"></div>
			<div className="modal-custom-container">
				<div className="modal-custom-header">
					{typeModal === "update" ? "Editar" : "Eliminar"}
					<button onClick={onClose}>✖</button>
				</div>

				{isDeleteModal ? (
					<div className="modal-custom-form-content-delete">
						<p className="delete-title">¿Estás seguro?</p>
						<p>
							Estás a punto de borrar el {page.toLowerCase()} "
							{dataItem && dataItem[headerData[1].dataKey]}", ¿Deseas continuar?
						</p>
						<div className="modal-custom-delete-btn">
							<button onClick={onClose} className="btn btn-cancel">
								Cancelar
							</button>
							<button onClick={handleAction} className="btn btn-delete">
								Eliminar
							</button>
						</div>
					</div>
				) : (
					<>
						{headerData.map((column) => (
							<div
								key={`${column.dataKey}`}
								className="modal-custom-form-content"
							>
								<div className="modal-custom-input">
									<label htmlFor={column.dataKey}>{column.title}</label>
									<input
										type="text"
										value={formData[column.dataKey] || ""}
										className="form-input"
										onChange={handleInputChange}
										disabled={typeModal === "delete"}
										name={column.dataKey}
									/>
								</div>
							</div>
						))}
						<div className="form-custom-button-container">
							<button
								type="button"
								className="form-custom-button"
								onClick={handleAction}
							>
								{typeModal === "update" ? "Actualizar" : "Eliminar"}
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ModalCustom;
