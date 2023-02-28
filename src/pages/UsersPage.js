import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";
import { DeleteUsercomponent } from "../components/DeleteUser";
import { deleteUserService } from "../services/userServices";
import { LinksList } from "../components/LinksList";
import { LinksUser } from "../components/LinksUser";

// export const UserPage = () => {
//   const { id } = useParams();
//   const { user } = useUser(id);
//   const [error, setError] = useState("");

//   console.log(user);

//

export const UsersPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  const [setError] = useState("");
  const { token } = useContext(AuthContext);

  if (loading) return <p>loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <section>
        <h2>Página de perfil de: {user.nombre}</h2>
        <p>Id de usuario: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Biografia: {user.biography}</p>
      </section>
    </>
  );
};
