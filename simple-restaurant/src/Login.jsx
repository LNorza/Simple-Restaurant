import loginImage from "./Images/Login-Image.png";
import logo from "./Images/Logo.png";

export function Login() {
    const handlesubmit = (e) => {
        e.preventDefault();

        //Llamada a la API para hacer el login
        //Validacion de datos
        //Redirección a la pagina de inicio
    };

    return (
        <section className="login-main-container">
            <div className="img-login">
                <img src={loginImage} alt="login" />
            </div>

            <article className="form-login">
                <img src={logo} alt="Logo" />
                <h1>Acceso</h1>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="">Nombre del usuario</label>
                    <input
                        type="text"
                        placeholder="Introduce tú nombre de usuario"
                    />

                    <label htmlFor="">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Introduce tú contraseña"
                    />

                    <button>Entrar</button>
                </form>
            </article>
        </section>
    );
}
