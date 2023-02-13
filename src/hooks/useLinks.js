import { useEffect, useState } from "react";
import { getAllLinksServices } from "../services";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return { links, loading, error };
};
