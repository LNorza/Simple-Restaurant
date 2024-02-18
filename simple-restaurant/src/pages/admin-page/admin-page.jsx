import logo from "../../assets/Images/Logo-icon.svg";
import user from "../../assets/Images/user.svg";
import "./admin-page.css";

export function AdminPage() {
    return (
        <div className="admin-page-container">
            <div className="admin-page-header">
                <div className="logo-container">
                    <img src={logo} alt="simpleRestaurant" />
                    <h1>SimpleRestaurant</h1>
                </div>

                <div className="user">
                    <img src={user} alt="user-foto" />
                    <div className="user-info">
                        <p>Samuel</p>
                        <p className="puesto">Gerente general</p>
                    </div>
                </div>
            </div>

            <div className="admin-page-aside"></div>

            <div className="admin-page-main"></div>
        </div>
    );
}
