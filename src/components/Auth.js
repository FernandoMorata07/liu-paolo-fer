import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    user && (
      <p>
        Usuario:<Link to={`/user`}>{user.nombre} </Link> registrado
        <button onClick={() => logOut() && navigate("/login")}>Salir</button>
      </p>
    )
  );
};
