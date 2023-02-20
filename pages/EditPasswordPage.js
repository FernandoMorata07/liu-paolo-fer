import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const EditPasswordPage = () => {
  // const navigate = useNavigate();

  // const [pass1, setPass1] = useState("");
  // const [pass2, setPass2] = useState("");
  // const [success, setSuccess] = useState(false);

  // const [error, setError] = useState("");

  // const handleForm = async (e) => {
  //   e.preventDefault();

  //   if (pass1 !== pass2) {
  //     setError("Las contraseñas no coinciden");
  //     return;
  //   }
  //   try {
  //     await registerUserService({ email, password: pass1, nombre });

  //     setSuccess(true);
  //     setNombre("");
  //     setEmail("");
  //     setPass1("");
  //     setPass2("");
  //     setError("");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  return (
    <section>
      <h2>Editar contraseña</h2>
      {/* <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="pass1">Contraseña actual</label>
          <input
            type="password"
            id="pass"
            name="pass"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass1">Nueva contraseña</label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass2">Confirmar nueva contraseña</label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Actualizar</button>
        {error ? <p>{error}</p> : null}
        {success && (
          <p>
            Te has registrado con éxito!<Link to="/login">Ir a Login</Link>
          </p>
        )}
        <p>
          ¿Ya estás registrado? <Link to="/login">haz login aquí</Link>
        </p>
      </form> */}
    </section>
  );
};
