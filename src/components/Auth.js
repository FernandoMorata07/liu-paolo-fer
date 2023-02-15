import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  return user ? (
    <p>
      Usuario: {user.nombre} registrado{" "}
      <button onClick={() => logOut()}>Salir</button>
    </p>
  ) : null;
};
