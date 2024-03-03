import "./card.css";

export const DefaultCard = ({title, value, percentage}) => {
    return (
        <div className="card">
            <div>
                <h3 className="card-title">{title}</h3>
                <p className="card-value">{value}</p>
                <p className="card-data">{percentage}</p>
            </div>
        </div>
    );
};
