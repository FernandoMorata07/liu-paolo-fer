import { SingleLink } from "./SingleLink";

export const LinksList = ({ links, removeLink }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <SingleLink link={link} removeLink={removeLink} />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links creados..</p>
  );
};
