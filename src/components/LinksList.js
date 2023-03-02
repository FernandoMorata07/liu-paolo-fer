import "../css/homePage.css";
import { SingleLink } from "./SingleLink";

export const LinksList = ({ links, removeLink, addVoteToLink }) => {
  return links.length ? (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <SingleLink
            link={link}
            removeLink={removeLink}
            addVoteToLink={addVoteToLink}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay links creados..</p>
  );
};