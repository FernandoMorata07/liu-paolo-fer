import { Link } from "react-router-dom";

export const SingleLink = ({ link }) => {
  return (
    <article>
      <h2>{link.title}</h2>
      <nav>{link.url}</nav>
      <p>
        By Usuario:{link.id_user} on
        <Link to={`/link/${link.id}`}>
          {new Date(link.createdLink).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
