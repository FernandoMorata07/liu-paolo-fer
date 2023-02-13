import { useLinks } from "../hooks/useLinks";

export const HomePage = () => {
  const { links, loading, error } = useLinks();

  if (loading) return <p>cargando links...</p>;
  if (error) return <p>{error}</p>;

  console.log(links);
  return (
    <section>
      <h1>Todos los links</h1>
      <p>Aquí la lista de los links</p>
    </section>
  );
};
