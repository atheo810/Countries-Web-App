import { useCountries } from "../hooks/useCountries";
import CountryCard from "./CountryCard";

export default function CountryList({ filters }) {
  const { data, loading, error } = useCountries(filters);

  if (loading) {
    return (
      <p className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center text-steel">
        Memuat data negara...
      </p>
    );
  }

  if (error) {
    return (
      <p className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center text-red-400">
        Gagal memuat data: {error}
      </p>
    );
  }

  if (data.length === 0) {
    return (
      <p className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center text-steel">
        Negara "{filters.search}" tidak ditemukan.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {data.map((country) => (
        <CountryCard key={country.codes.alpha_3} country={country} />
      ))}
    </div>
  );
}
