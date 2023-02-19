import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { LinksList } from "../components/LinksList";
import { NewLink } from "../components/NewLink";
import { AuthContext } from "../context/AuthContext";
import { useLinks } from "../hooks/useLinks";

export const HomePage = () => {
  const { links, loading, addLink, error } = useLinks();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(links);
  return (
    <section>
      <h2>Aquí están los links publicados</h2>
      {user ? <NewLink addLink={addLink} /> : null}
      <LinksList links={links} />
    </section>
  );
};
