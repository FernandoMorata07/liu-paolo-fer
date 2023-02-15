import { SingleLink } from "./SingleLink";

export const LinksList = ({ links }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <SingleLink link={link} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links creados..</p>
  );
};
