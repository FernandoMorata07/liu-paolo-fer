import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";

export const UserPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { id } = useParams();
  console.log(user);
  console.log(id);
  // console.log(user.id);

  // const { token } = useContext(AuthContext);
  // const { user, loading, error } = useUser(id);
  // if (loading) return <p>Cargando datos del usuario...</p>;
  // if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section>
        <h2>Página de perfil de {"user.nombre"}</h2>
        <p>Usuario de id: {"user.id"}</p>
        <p>Email: {"user.email"}</p>
        <p>NickName: {"user.nombre"}</p>
        <p>Biografia: {"user.biography"}</p>
      </section>
      <section>
        <button>
          <Link to="/edit-user">Actualizar Datos</Link>
        </button>
        <button>
          <Link to="/edit-pass">Cambiar Contraseña</Link>
        </button>
      </section>
    </>
  );
};
