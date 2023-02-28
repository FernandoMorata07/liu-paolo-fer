import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteUserService } from "../services/userServices";

export const DeleteUsercomponent = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const Deleteuser = async ({ password, token }) => {
    try {
      await deleteUserService({ password, token });
    } catch (error) {
      setError(error.message);
    }
  };
  return <button>Borrar users</button>;
};
