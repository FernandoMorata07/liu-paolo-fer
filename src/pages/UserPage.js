import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section>
        <h2>Página de perfil de: {user.nombre}</h2>
        <p>Id de usuario: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Biografia: {user.biography}</p>
      </section>
      <section>
        <button>
          <Link to="/edit-user">Actualizar Datos</Link>
        </button>
        <button>
          <Link to="/edit-pass">Cambiar Contraseña</Link>
        </button>
        <button>Eliminar mi cuenta de usuario</button>
      </section>
    </>
  );
};
