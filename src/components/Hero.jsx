import { useState } from "react";

const REGIONS = [
  { value: "", label: "Semua region" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export default function Hero({ onSearch }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ search: search.trim(), region });
  }

  return (
    <section className="bg-ink px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="font-display text-3xl sm:text-4xl text-parchment leading-tight">
          Jelajahi setiap negara di dunia
        </h2>
        <p className="mt-3 text-sm sm:text-base text-steel">
          Cari negara, filter berdasarkan region, dan lihat detailnya.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
        >
          <label className="flex-1">
            <span className="sr-only">Cari negara</span>
            <input
              type="text"
              autoComplete="off"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Japan"
              className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3
                         text-parchment placeholder:text-steel/60
                         focus:outline-none focus:border-gold transition-colors"
            />
          </label>

          <label className="sm:w-48">
            <span className="sr-only">Region</span>
            <select
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-lg bg-surface border border-white/10 px-4 py-3
                         text-parchment focus:outline-none focus:border-gold transition-colors"
            >
              {REGIONS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="w-full sm:w-auto rounded-lg bg-gold px-6 py-3 font-medium text-ink
                       hover:bg-gold/90 transition-colors"
          >
            Cari
          </button>
        </form>
      </div>
    </section>
  );
}
