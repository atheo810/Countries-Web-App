export default function About() {
  return (
    <section className="bg-ink px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-left">
        <h1 className="font-display text-3xl sm:text-4xl text-parchment">
          Tentang Atlasia
        </h1>
        <p className="mt-4 text-sm sm:text-base text-steel leading-relaxed">
          Atlasia dibuat untuk mempermudah menjelajahi data dasar setiap negara
          di dunia — mulai dari populasi, ibu kota, hingga letak regionnya —
          tanpa perlu buka banyak sumber berbeda.
        </p>

        <div className="mt-8 space-y-4 text-sm sm:text-base text-steel leading-relaxed">
          <p>
            Data negara diambil langsung dari{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sage hover:text-gold transition-colors"
            >
              restcountries.com
            </a>{" "}
            API, mencakup 250+ negara dengan informasi yang diperbarui secara
            berkala.
          </p>
          <p>
            Dibangun dan dibuat berdasarkan sebagai bahan referensi dan edukasi
          </p>
        </div>
      </div>
    </section>
  );
}
