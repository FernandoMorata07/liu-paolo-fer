import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services/linksServices";

export const NewLink = ({ addLink }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = Object.fromEntries(new FormData(e.target));
      const createdLink = await sendLinkService({ data, token });
      addLink(createdLink);
      setError("");
      e.target.reset();
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
        <label htmlFor="text">título</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Título de la publicación"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="url">URL</label>
        <input
          type="url"
          id="url"
          name="url"
          required
          defaultValue={"https://www."}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="text">descripción</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Descripción de la publicación"
        />
      </fieldset>

      <button>Enviar link</button>
      {sending ? <p>Enviando link</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
