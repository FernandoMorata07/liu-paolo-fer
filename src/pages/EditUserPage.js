import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const EditUserPage = () => {
  // const navigate = useNavigate();

  // const [nombre, setNombre] = useState("");
  // const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);

  // const [error, setError] = useState("");

  // const handleForm = async (e) => {
  //   e.preventDefault();

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
      <h2>Actualizar datos</h2>
      {/* <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>{" "}
        <fieldset>
          <label htmlFor="name">NickName</label>
          <input
            type="name"
            id="name"
            name="name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Biografia</label>
          <input
            type="text"
            id=""
            name=""
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
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
