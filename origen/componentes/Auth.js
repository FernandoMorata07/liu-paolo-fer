import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    user && (
      <p>
        <Link to={`/user`}>{user.nombre} </Link> registrado
        <button onClick={() => logOut() && navigate("/login")}>Salir</button>
      </p>
    )
  );
};


/*
import "../css/authPage.css";
import iconSalir from "../images/iconSalir.png";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    user && (
      <>
        <Link className="enlaceMiPerfil" to={`/user/${user.id}`}>
          Mi Perfil
          {/* {user.nombre}{" "} */}
       /* </Link>

        <button className="botonSalir" onClick={() => logOut() && navigate("/login")}>
          Salir
          <img className="iconoSalir" src={iconSalir}></img>
        </button>
      </>
    )
  );
};


*/
