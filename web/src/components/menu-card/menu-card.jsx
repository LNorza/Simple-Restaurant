import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./menu-card.css";

export const MenuCard = ({imagePath, text, direction}) => {
    return (
        <div>
            <Link to={direction} className="menu-card">
                <div>
                    <img
                        src={imagePath}
                        alt="Notebook image"
                        className="menu-card-image"
                    />
                </div>
                <div className="menu-card-text">{text}</div>
            </Link>
        </div>
    );
};

MenuCard.propTypes = {
    imagePath: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
};
