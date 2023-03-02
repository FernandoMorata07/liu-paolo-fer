import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";
import { DeleteUsercomponent } from "../components/DeleteUser";
import { deleteUserService } from "../services/userServices";
import { LinksList } from "../components/LinksList";
import { LinksUser } from "../components/LinksUser";

export const UserPage = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

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
        <button>
          <Link to="/delete-user">Borrar cuenta</Link>
        </button>
      </section>
    </>
  );
};
