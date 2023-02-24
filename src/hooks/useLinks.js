import { useEffect, useState } from "react";
import { getAllLinksServices } from "../services/linksServices";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = await getAllLinksServices();

        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, []);

  const addLink = (newLink) => {
    setLinks([newLink, ...links]);
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  // const votoLink = (idLink) => {
  //   setLinks()
  // }

  return { links, loading, addLink, removeLink, error };
};
