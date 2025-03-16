import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-ink px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-left">
        <h1 className="font-display text-3xl sm:text-5xl text-parchment leading-tight">
          Satu peta, semua negara di dunia
        </h1>
        <p className="mt-4 text-sm sm:text-base text-steel max-w-xl">
          Atlasia mengumpulkan profil setiap negara — populasi, ibu kota,
          region, dan bendera — dalam satu tempat yang gampang dijelajahi.
        </p>

        <Link
          to="/explore"
          className="inline-block mt-8 rounded-lg bg-gold px-6 py-3 font-medium text-ink
                     hover:bg-gold/90 transition-colors"
        >
          Mulai jelajah
        </Link>
      </div>
    </section>
  );
}
