import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SingleLink } from "./SingleLink";

export const LinksUser = ({ links, removeLink, addVoteToLink }) => {
  const { user } = useContext(AuthContext);
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
    <p>No hay links creados..por {user.nombre}</p>
  );
};
