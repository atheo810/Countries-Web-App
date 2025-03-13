export default function CountryCard({ country }) {
  const { names, capitals, region, population, flag, codes } = country;

  return (
    <div className="bg-surface border border-white/10 rounded-lg overflow-hidden hover:border-gold/50 transition-colors">
      <img
        src={flag?.url_svg || flag?.url_png}
        alt={`Bendera ${names.common}`}
        className="w-full h-28 sm:h-32 object-cover"
      />
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base sm:text-lg text-parchment truncate">
            {names.common}
          </h3>
          <span className="font-mono text-xs text-steel shrink-0">
            {codes.alpha_3}
          </span>
        </div>

        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-sage/20 text-sage">
          {region}
        </span>

        <dl className="mt-3 space-y-1 text-sm text-steel">
          <div className="flex justify-between gap-2">
            <dt>Ibu kota</dt>
            <dd className="text-parchment/80 text-right truncate">
              {capitals?.[0]?.name ?? "-"}
            </dd>
          </div>
          <div className="flex justify-between gap-2">
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
