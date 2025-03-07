import { useEffect, useState } from "react";
import {
  getAllCountries,
  getCountriesByName,
  getCountriesByRegion,
} from "../api/countries";

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
        let result;

        if (filters.search) {
          result = await getCountriesByName(filters.search, opts);
        } else if (filters.region) {
          result = await getCountriesByRegion(filters.region, opts);
        } else {
          result = await getAllCountries(opts);
        }

        if (filters.search && filters.region) {
          result = result.filter(
            (c) => c.region.toLowerCase() === filters.region.toLowerCase(),
          );
        }

        setData(result);
      } catch (err) {
        if (err.name === "AbortError") return;
        if (err.status === 404) {
          setData([]);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    run();
    return () => controller.abort();
  }, [filters.search, filters.region]);

  return { data, loading, error };
}
