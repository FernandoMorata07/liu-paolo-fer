import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services";

export const NewLink = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = new FormData(e.target);

      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1>Crea tu nuevo link</h1>
      <fieldset>
        <label htmlFor="text">title</label>
        <input type="text" id="title" name="title" required />
      </fieldset>
      <fieldset>
        <label htmlFor="url">URL</label>
        <input type="url" id="url" name="url" required />
      </fieldset>

      <fieldset>
        <label htmlFor="text">descripcion</label>
        <input type="text" id="descripcion" name="titulo" />
      </fieldset>

      <button>Enviar link</button>
      {sending ? <p>Enviando link</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
