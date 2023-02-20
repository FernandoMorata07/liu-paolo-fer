import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    user && (
      <p>
        Usuario:<Link to={`/user/${user.id}`}>{user.nombre} </Link> registrado
        <button onClick={() => logOut()}>Salir</button>
      </p>
    )
  );
};
