import PropTypes from "prop-types";
import "./menu-card.css";

const MenuCard = ({imagePath, text}) => {
	return (
		<div className="card">
			<img src={imagePath} alt="Card" className="card-image" />
			<div className="card-text">{text}</div>
		</div>
	);
};

MenuCard.propTypes = {
	imagePath: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default MenuCard;
