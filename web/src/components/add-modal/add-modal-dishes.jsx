import React, {useState} from "react";
import CustomSelect from "../custom-select/custom-select";

const AddModalDishes = ({onClose, onSave}) => {
	const [clave, setClave] = useState("");
	const [dish, setDish] = useState("");
	const [group, setGroup] = useState("");
	const [price, setPrice] = useState("");

	const statusOptions = [
		{value: "appetizer", label: "Entradas"},
		{value: "main", label: "Plato fuerte"},
		{value: "dessert", label: "Postres"},
		{value: "drink", label: "Bebidas"},
		{value: "coctelery", label: "Coctelería"},
		{value: "other", label: "Otros"},
	];

	const handleSave = () => {
		const newDish = {
			clave,
			dish,
			group,
			price: parseFloat(price),
		};
		onSave(newDish);
	};

	const selectGroup = (option) => {
		setGroup(option.label);
		console.log(option);
	};
	return (
		<div className="modal-custom">
			<div onClick={onClose} className="overlay"></div>
			<div className="modal-custom-container">
				<div className="modal-custom-header">
					Agregar platillo
					<button onClick={onClose}>✖</button>
				</div>
				<div className="modal-custom-form-content">
					<div className="modal-custom-input">
						<span>Clave</span>
						<input
							type="text"
							className="form-input"
							value={clave}
							onChange={(e) => setClave(e.target.value)}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Platillo</span>
						<input
							type="text"
							className="form-input"
							value={dish}
							onChange={(e) => setDish(e.target.value)}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Grupo</span>
						<CustomSelect
							options={statusOptions}
							onOptionChange={selectGroup}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Precio</span>
						<input
							type="text"
							className="form-input"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
				</div>
				<div className="form-custom-button-container">
					<button className="form-custom-button" onClick={handleSave}>
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddModalDishes;
