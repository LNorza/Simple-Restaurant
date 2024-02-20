import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./menu-card.css";

const MenuCard = ({imagePath, text, direction}) => {
    return (
        <div className="card">
            <Link to={direction}>
                <div>
                    <img src={imagePath} alt="Card" className="card-image" />
                </div>
                <div className="card-text">{text}</div>
            </Link>
        </div>
    );
};

MenuCard.propTypes = {
    imagePath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
};

export default MenuCard;
