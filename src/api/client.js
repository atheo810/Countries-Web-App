const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "https://api.restcountries.com/countries/v5";
const API_KEY = import.meta.env.VITE_RESTCOUNTRIES_API_KEY;

export async function apiGet(path, { signal } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    signal,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!res.ok) {
    const error = new Error(`API error ${res.status}`);
    error.status = res.status;
    throw error;
  }

  return res.json();
}
