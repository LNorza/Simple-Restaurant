import React, {useState} from "react";
import {Loading} from "../Loading/Loading";
import {SquarePen, Trash2} from "lucide-react";
import "./table-custom.css";
import ModalCustom from "../ModalCustom/modal-custom";
import DeleteModal from "../delete-modals/delete-modal";
import UpdateDishesModal from "../edit-modal/edit-modal-dishes";
import EditProductsModal from "../edit-modal/edit-modal-inventory";

export const TableCustom = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		headerColumnsTable,
		infoForTable,
		nColumns,
		namePage,
		deleteFunction,
		updateFunction,
		getFunction,
		useIn,
	} = props;
	const [typeAction, setTypeAction] = useState();
	const [showModal, setShowModal] = useState(false);
	const [optionSelected, setOptionSelected] = useState(null);
	const [nameSelected, setNameSelected] = useState(null);

	function onOpenModal(idSelected, nameSelected, action) {
		setTypeAction(action);
		setOptionSelected(idSelected);
		setNameSelected(nameSelected);
		setShowModal(true);
		console.log("Abrir modal para:", action, "con ID:", idSelected);
	}

	function onCloseModal() {
		if (useIn === "dishes" || useIn === "inventory") {
			getFunction();
		}
		setTypeAction(null);
		setShowModal(false);
		setOptionSelected(null);
	}

	const numColumns = nColumns + 1;
	return (
		<div className="table-container">
			<div className="table">
				<div
					className={`table-display-${numColumns}-header table-header ${useIn}`}
				>
					{headerColumnsTable.map((column, index) => (
						<div
							className={`table-header-text ${
								column.id === 1 ? "center-info-table" : ""
							}`}
							key={index}
						>
							{column.title}
						</div>
					))}
				</div>

				{isLoading && <Loading />}

				<div className="data-container">
					{infoForTable.map((row, rowIndex) => (
						<div
							className={`table-display-${numColumns}-data info-table ${useIn}`}
							key={rowIndex}
						>
							{headerColumnsTable.map((column, colIndex) => (
								<span
									key={`${rowIndex}-${colIndex}`}
									className={column.id === 1 ? "center-info-table" : ""}
								>
									{row[column.dataKey]}
								</span>
							))}

							<div className="boton-container">
								<button
									className="button"
									onClick={() => {
										if (useIn === "dishes") {
											onOpenModal(row.IDPlatillo, row.NombrePlatillo, "update");
										} else if (useIn === "inventory") {
											onOpenModal(row.IDProducto, row.NombreProducto, "update");
										} else {
											onOpenModal(row.id, row.name, "update");
										}
									}}
								>
									<SquarePen size={28} color="#294B69" />
								</button>
								<button
									className="button"
									onClick={() => {
										if (useIn === "dishes") {
											onOpenModal(row.IDPlatillo, row.NombrePlatillo, "delete");
										} else if (useIn === "inventory") {
											onOpenModal(row.IDProducto, row.NombreProducto, "delete");
										} else {
											onOpenModal(row.id, row.name, "delete");
										}
									}}
								>
									<Trash2 color="#294B69" size={28} />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{showModal && useIn === "dishes" && typeAction === "update" && (
				<UpdateDishesModal dishID={optionSelected} onClose={onCloseModal} />
			)}

			{showModal && useIn === "dishes" && typeAction === "delete" && (
				<DeleteModal
					message={`el platillo ${nameSelected}, ¿Deseas continuar?`}
					employeeID={optionSelected}
					onClose={onCloseModal}
					deleteFunction={deleteFunction}
				/>
			)}

			{showModal && useIn === "inventory" && typeAction === "update" && (
				<EditProductsModal productID={optionSelected} onClose={onCloseModal} />
			)}

			{showModal && useIn === "inventory" && typeAction === "delete" && (
				<DeleteModal
					message={`el producto ${nameSelected}, ¿Deseas continuar?`}
					employeeID={optionSelected}
					onClose={onCloseModal}
					deleteFunction={deleteFunction}
				/>
			)}

			{showModal && useIn !== "dishes" && useIn !== "inventory" && (
				<ModalCustom
					isOpen={showModal}
					onClose={onCloseModal}
					page={namePage}
					typeModal={typeAction}
					idSelected={optionSelected}
					headerData={headerColumnsTable}
					totalData={infoForTable}
					deleteFunction={deleteFunction}
					updateFunction={updateFunction}
					useIn={useIn}
				/>
			)}
		</div>
	);
};

export default TableCustom;
