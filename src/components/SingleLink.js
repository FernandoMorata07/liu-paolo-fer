import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { deleteLinkService } from "../services";

export const SingleLink = ({ link, removeLink }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteLink = async (id) => {
    try {
      await deleteLinkService({ id, token });

      if (removeLink) {
        removeLink(id);
      } else {
        navigate("/");
        alert(
          "Acabas de borrar este link. Serás redirigido a la página principal."
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(link);
  console.log(user);
  return (
    <article>
      <Link to={`/link/${link.id}`}>
        <h2>{link.title}</h2>
      </Link>
      <a href={`${link.url}`} target="_blank" rel="noreferrer">
        {link.url}
      </a>

      <p>
        Postado por: <Link to={`/user/${link.id_user}`}>"{link.userName}"</Link>{" "}
        en:
        {` ${new Date(link.createdLink).toLocaleString()}`}
      </p>
      {link.avgVotos ? (
        <p>Esa publicación tiene una media de votos de {link.avgVotos}.</p>
      ) : (
        <p>Esa publicación no ha sido votada todavía.</p>
      )}
      {user && user.id === link.id_user && (
        <>
          <button
            onClick={() => {
              if (window.confirm("¿Estás seguro?")) deleteLink(link.id);
            }}
          >
            Borrar link
          </button>
          {error && <p>{error}</p>}
        </>
      )}
    </article>
  );
};
