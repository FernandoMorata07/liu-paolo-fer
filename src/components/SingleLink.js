import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services/linksServices";
import { VotarLink } from "./VotarLink";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SingleLink = ({ link, removeLink, addVoteToLink }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  // const notify = () => toast("¿Estás seguro?");

  const deleteLink = async (id) => {
    try {
      await deleteLinkService({ id, token });

      if (removeLink) {
        removeLink(id);
      } else {
        navigate("/");

        toast.success(
          "Acabas de borrar este link. Serás redirigido a la página principal."
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article>
      <Link to={`/link/${link.id}`}>
        <h2>{link.title}</h2>
      </Link>
      <a href={`${link.url}`} target="_blank" rel="noreferrer">
        {link.url}
      </a>

      <p>
        Posteado por:{" "}
        <Link to={`/user/${link.id_user}`}>"{link.userName}"</Link> en:
        {` ${new Date(link.createdLink).toLocaleString()}`}
      </p>
      {link.avgVotos ? (
        <p>
          Esta publicación tiene una media de votos de {parseInt(link.avgVotos)}{" "}
          estrellas.
        </p>
      ) : (
        <p>Esta publicación aún no fue votada.</p>
      )}
      {/* Componente de votos representado con estrellas */}
      {user.id !== link.id_user && (
        <>
          <VotarLink
            idLink={link.id}
            loggedUserVote={link.loggedUserVote}
            addVoteToLink={addVoteToLink}
          />
        </>
      )}
      {/* Botón de borrar link*/}
      {user && user.id === link.id_user && (
        <>
          {/* <button
            onClick={() => {
              {
                notify;
              }
              deleteLink(link.id);
              console.log(notify);
            }}
          >
            Notify
          </button>
          <ToastContainer /> */}

          <button
            onClick={() => {
              if (toast.success("¿Estás seguro?")) deleteLink(link.id);
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
