import { useEffect, useState } from "react";
import { searchCountries } from "../api/countries";

export function useCountries(filters) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      setLoading(true);
      setError(null);

      try {
        const opts = { signal: controller.signal };
        const result = await searchCountries(filters, opts);
        setData(result.data.objects);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    run();
    return () => controller.abort();
  }, [filters.search, filters.region]);

  return { data, loading, error };
}
