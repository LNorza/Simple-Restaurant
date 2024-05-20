import React, {useState, useRef, useEffect} from "react";
import "./custom-select.css";
import {ChevronDown, Check} from "lucide-react";

const CustomSelect = ({options, onOptionChange, initialValue}) => {
	const [selected, setSelected] = useState(initialValue || options[0].label);
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (option) => {
		setSelected(option.label);
		setIsOpen(false);
		onOptionChange(option);
	};

	const handleOutsideClick = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	// Utiliza un efecto para establecer el valor inicial
	useEffect(() => {
		if (initialValue !== undefined) {
			setSelected(initialValue);
		}
	}, [initialValue]);

	return (
		<div
			className="dropdown-container"
			ref={dropdownRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button
				className="select-dropdown"
				onClick={toggleDropdown}
				aria-expanded={isOpen}
			>
				{selected}
				<ChevronDown className="dropdown-icon" />
			</button>
			{isOpen && (
				<div
					className={`dropdown-body ${isHovered ? "dropdown-body-hover" : ""}`}
				>
					<div className="dropdown-body-scroll">
						{options.map((option) => (
							<div
								className="dropdown-body-content"
								key={option.value}
								onClick={() => handleSelect(option)}
							>
								{selected === option.label && (
									<Check className="dropdown-check" />
								)}
								<span className="dropdown-text">{option.label}</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
