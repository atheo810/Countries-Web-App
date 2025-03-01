export default function Hero() {
  return (
    <section>
      <h2>Explore every country in the world</h2>
      <p>Cari negara, filter berdasarkan region, dan lihat detailnya.</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Cari negara
          <input type="text" name="search" placeholder="e.g. Japan" />
        </label>

        <label>
          Region
          <select name="region" defaultValue="">
            <option value="">Semua region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </label>

        <input type="submit" value="Search" />
      </form>
    </section>
  );
}
