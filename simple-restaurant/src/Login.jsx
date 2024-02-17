import loginImage from "./Images/Login-Image.png";
import logo from "./Images/Logo.png";

export function Login() {
    return (
        <section className="login-main-container">
            <div className="img-login">
                <img src={loginImage} alt="login" />
            </div>

            <article className="form-login">
                <img src={logo} alt="Logo" />
                <h1>Acceso</h1>
                <form>
                    <label htmlFor="">Nombre del usuario</label>
                    <input
                        type="text"
                        placeholder="Introduce tú nombre de usuario"
                    />

                    <label htmlFor="">Contraseña</label>
                    <input type="text" placeholder="Introduce tú contraseña" />

                    <button>Entrar</button>
                </form>
            </article>
        </section>
    );
}
