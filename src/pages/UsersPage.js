import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";
import { DeleteUsercomponent } from "../components/DeleteUser";
import { deleteUserService } from "../services/userServices";
import { LinksList } from "../components/LinksList";
import { LinksUser } from "../components/LinksUser";

export const UsersPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<console.log("este consolelog", user.links);>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <>
      <section>
        <h2>Página de perfil de: {user.info.nombre}</h2>
        <p>Id de usuario: {user.info.id}</p>
        <p>Email: {user.info.email}</p>
        <p>Biografia: {user.info.biography}</p>
        <LinksUser id={id} />
      </section>
    </>
  );
};
