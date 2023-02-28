import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { editPassService } from "../services/userServices";
import { AuthContext } from "../context/AuthContext";

export const EditPasswordPage = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    // try {
    //   const data = await loginUserService({ password });

    //   logIn(data);
    //   navigate("/");
    // } catch (error) {
    //   setError(error.message);
    // }

    try {
      await editPassService({ newPass, confirmNewPass, token });

      setSuccess(true);
      setNewPass("");
      setConfirmNewPass("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h2>Editar contraseña</h2>
      <form onSubmit={handleForm}>
        {/* <fieldset>
          <label htmlFor="password">Contraseña actual </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset> */}
        <fieldset>
          <label htmlFor="newPass">Contraseña nueva</label>
          <input
            type="password"
            id="newPass"
            name="newPass"
            value={newPass}
            required
            onChange={(e) => setNewPass(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="confirmNewPass">Confirmar la nueva contraseña</label>
          <input
            type="password"
            id="confirmNewPass"
            name="confirmNewPass"
            value={confirmNewPass}
            required
            onChange={(e) => setConfirmNewPass(e.target.value)}
          />
        </fieldset>

        <button>Actualizar</button>
        {error ? <p>{error}</p> : null}
        {success && (
          <p>
            Contraseña actualizada con exito<Link to="/login">Ir a Login</Link>
          </p>
        )}
      </form>
    </section>
  );
};
