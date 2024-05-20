import {useEffect, useState} from "react";
import {BASE_URL} from "../../utilities/petitionConst";
import CustomSelect from "../custom-select/custom-select";
import "../employee-modal/UpdateModal";

const EditProductsModal = ({onClose, productID}) => {
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
	const [provider, setProvider] = useState("");
	const [unit, setUnit] = useState("");
	const [quantity, setQuantity] = useState("");
	const [unitaryCost, setUnitaryCost] = useState("");
	const [providerID, setProviderID] = useState(1);

	useEffect(() => {
		getProduct(productID);
	}, [productID]);

	const getProduct = (productID) => {
		fetch(`${BASE_URL}/products/${productID}`)
			.then((response) => response.json())
			.then((data) => {
				setProduct(data.NombreProducto);
				setProvider(data.NombreProveedor);
				setQuantity(data.Cantidad);
				setUnitaryCost(data.Precio);
				setUnit(data.Unidad);
				setProviderID(data.IDProveedor);
			})
			.catch((error) => {
				console.error("Error fetching employee:", error);
			});
	};

	const updateProduct = () => {
		const updatedProduct = {
			NombreProducto: product,
			IDProveedor: providerID,
			Unidad: unit,
			Cantidad: quantity,
			Precio: unitaryCost,
		};

		fetch(`${BASE_URL}/products/${productID}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
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
					Editar producto
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
							initialValue={provider}
						/>
					</div>
					<div className="modal-custom-input">
						<span>Unidad de medida</span>
						<CustomSelect
							options={unidadMedidaOptions}
							onOptionChange={selectUnit}
							initialValue={unit}
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
					<button className="form-custom-button" onClick={updateProduct}>
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProductsModal;
