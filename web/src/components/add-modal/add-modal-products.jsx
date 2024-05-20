import React, {useState} from "react";
import CustomSelect from "../custom-select/custom-select";
import {BASE_URL} from "../../utilities/petitionConst.js";

const AddModalProducts = ({onClose}) => {
	const proveedoresOptions = [
		{value: "1", label: "Distribuidora La Abuela"},
		{value: "2", label: "Frutas Frescas S.A."},
		{value: "3", label: "Carnes del Sur"},
	];

	const unidadMedidaOptions = [
		{value: "kg", label: "Kilogramos"},
		{value: "lt", label: "Litros"},
		{value: "pz", label: "Piezas"},
	];
	const [product, setProduct] = useState("");
	const [provider, setProvider] = useState(proveedoresOptions[0].label);
	const [unit, setUnit] = useState(unidadMedidaOptions[0].label);
	const [quantity, setQuantity] = useState("");
	const [unitaryCost, setUnitaryCost] = useState("");
	const [providerID, setProviderID] = useState(1);

	const handleSave = () => {
		const newProduct = {
			NombreProducto: product,
			IDProveedor: providerID,
			Unidad: unit,
			Cantidad: quantity,
			Precio: unitaryCost,
		};

		fetch(`${BASE_URL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Nuevo producto creado:", data);
				onClose();
			})
			.catch((error) => {
				console.error("Error al guardar el producto:", error);
			});
	};

	const selectProvider = (option) => {
		setProvider(option.value);
		setProviderID(option.value);
	};

	const selectUnit = (option) => {
		setUnit(option.value);
	};

	return (
		<div className="modal-custom">
			<div onClick={onClose} className="overlay"></div>
			<div className="modal-custom-container">
				<div className="modal-custom-header">
					Agregar producto
					<button onClick={onClose}>✖</button>
				</div>
				<div className="modal-custom-form-content">
					<div className="modal-custom-input">
						<span>Producto</span>
						<input
							type="text"
							className="form-input"
							value={product}
							onChange={(e) => setProduct(e.target.value)}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Proveedor</span>
						<CustomSelect
							options={proveedoresOptions}
							onOptionChange={selectProvider}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Unidad de medida</span>
						<CustomSelect
							options={unidadMedidaOptions}
							onOptionChange={selectUnit}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Cantidad en físico</span>
						<input
							type="text"
							className="form-input"
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Costo unitario</span>
						<input
							type="text"
							className="form-input"
							value={unitaryCost}
							onChange={(e) => setUnitaryCost(e.target.value)}
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

export default AddModalProducts;
