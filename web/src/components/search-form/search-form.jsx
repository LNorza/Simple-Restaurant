import "./search-form.css";
import {Search} from "lucide-react";
import {useRef} from "react";

export function SearchForm({placeholder, onSearch}) {
	const inputRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault(); // Evita que se envíe el formulario

		const searchTerm = inputRef.current.value; // Obtener el valor del input

		// Llamar a la función onSearch con el término de búsqueda
		onSearch(searchTerm);

		// Vaciar el input
		inputRef.current.value = "";
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<button type="submit">
					<Search />
				</button>
				<input
					ref={inputRef}
					className="input"
					placeholder={placeholder}
					required=""
					type="text"
					name="searchTerm"
				/>
				<button className="reset" type="reset"></button>
			</form>
		</div>
	);
}
