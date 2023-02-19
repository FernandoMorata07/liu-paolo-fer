import { Link } from "react-router-dom";

export const SingleLink = ({ link }) => {
  // console.log(link);
  return (
    <article>
      <Link to={`/link/${link.id}`}>
        <h2>{link.title}</h2>
      </Link>
      <a href={`${link.url}`} target="_blank" rel="noreferrer">
        {link.url}
      </a>

      <p>
        Postado por "Usuario: {link.userName}" on:
        {` ${new Date(link.createdLink).toLocaleString()}`}
      </p>
      {link.avgVotos ? (
        <p>Esa publicación tiene una media de votos de {link.avgVotos}.</p>
      ) : (
        <p>Esa publicación no ha sido votada todavía.</p>
      )}
    </article>
  );
};
