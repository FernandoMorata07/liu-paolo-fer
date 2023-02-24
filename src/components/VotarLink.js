import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { votarLinkService } from "../services/linksServices";

export const VotarLink = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const [voto, setVoto] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await votarLinkService({ voto, token });
      console.log(voto);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  // const { data, setData } = useState(0);

  // const handleForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setSending(true);

  //     const Votar = await votarLinkService({ data, token });

  //     setError("");
  //     e.target.reset();
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setSending(false);
  //   }
  // };

  return (
    <form onSubmit={handleForm} className="clasificacion">
      {/* <label htmlFor="voto"></label>
      <input
        id="voto"
        type="text"
        name="voto"
        onChange={(e) => setVoto(e.target.value)}
        required
      /> */}
      <input
        id="voto1"
        type="radio"
        name="voto"
        value="1"
        onChange={(e) => setVoto(e.target.value)}
      />
      <label htmlFor="voto1">★</label>

      <input
        id="voto2"
        type="radio"
        name="voto"
        value="2"
        onChange={(e) => setVoto(e.target.value)}
      />
      <label htmlFor="voto2">★</label>

      <input
        id="voto3"
        type="radio"
        name="voto"
        value="3"
        onChange={(e) => setVoto(e.target.value)}
      />
      <label htmlFor="voto3">★</label>

      <input
        id="voto4"
        type="radio"
        name="voto"
        value="4"
        onChange={(e) => setVoto(e.target.value)}
      />
      <label htmlFor="voto4">★</label>

      <input
        id="voto5"
        type="radio"
        name="voto"
        value="5"
        onChange={(e) => setVoto(e.target.value)}
      />
      <label htmlFor="voto5">★</label>

      <button>Votar link</button>
      {sending ? <p>Votando link</p> : null}
      {error ? <p>{error}</p> : null}
    </form>
  );
};
