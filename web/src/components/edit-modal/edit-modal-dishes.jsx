import {useEffect, useState} from "react";
import {BASE_URL} from "../../utilities/petitionConst";
import CustomSelect from "../custom-select/custom-select";
import "../employee-modal/UpdateModal";

const UpdateDishesModal = ({onClose, dishID}) => {
	const [dish, setDish] = useState("");
	const [price, setPrice] = useState("");
	const [group, setGroup] = useState("");
	const [groupID, setGroupID] = useState(1);

	const statusOptions = [
		{value: "1", label: "Entradas"},
		{value: "2", label: "Platos principales"},
		{value: "3", label: "Postres"},
		{value: "4", label: "Bebidas"},
		{value: "5", label: "Coctelería"},
		{value: "6", label: "Otros"},
	];

	useEffect(() => {
		getDish(dishID);
	}, [dishID]);

	const getDish = (dishID) => {
		fetch(`${BASE_URL}/platillos/${dishID}`)
			.then((response) => response.json())
			.then((data) => {
				setDish(data.NombrePlatillo);
				setPrice(data.Precio);
				setGroup(data.NombreGrupo);
				setGroupID(data.IDGrupo);
			})
			.catch((error) => {
				console.error("Error fetching employee:", error);
			});
	};

	const updateDish = () => {
		console.log("IDGrupo:", groupID);
		const updatedDish = {
			NombrePlatillo: dish,
			Precio: price,
			Grupo: groupID,
		};

		fetch(`${BASE_URL}/platillos/${dishID}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedDish),
		})
			.then((response) => {
				console.log("Platillo actualizado:", response);
				onClose();
			})
			.catch((error) => {
				console.error("Error updating dish:", error);
			});
	};

	const onCloseModal = () => {
		onClose();
	};

	const selectGroup = (option) => {
		setGroup(option.label);
		setGroupID(option.value);
		console.log(option);
	};

	return (
		<div className="modal-custom">
			<div onClick={onClose} className="overlay"></div>
			<div className="modal-custom-container">
				<div className="modal-custom-header">
					Editar platillo
					<button onClick={onClose}>✖</button>
				</div>
				<div className="modal-custom-form-content">
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
						<span>Precio</span>
						<input
							type="text"
							className="form-input"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Grupo</span>
						<CustomSelect
							options={statusOptions}
							initialValue={group}
							onOptionChange={selectGroup}
						/>
					</div>
				</div>
				<div className="form-custom-button-container">
					<button className="form-custom-button" onClick={updateDish}>
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};

export default UpdateDishesModal;
