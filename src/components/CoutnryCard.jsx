export default function CountryCard({ country }) {
  const { name, capital, region, population, flags, cca3 } = country;

  return (
    <div className="bg-surface border border-white/10 rounded-lg overflow-hidden hover:border-gold/50 transition-colors">
      <img
        src={flags?.svg || flags?.png}
        alt={`Bendera ${name.common}`}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-parchment">{name.common}</h3>
          <span className="font-mono text-xs text-steel">{cca3}</span>
        </div>

        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-sage/20 text-sage">
          {region}
        </span>

        <dl className="mt-3 space-y-1 text-sm text-steel">
          <div className="flex justify-between">
            <dt>Ibu kota</dt>
            <dd className="text-parchment/80">{capital?.[0] ?? "-"}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Populasi</dt>
            <dd className="font-mono text-parchment/80">
              {population.toLocaleString("id-ID")}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
