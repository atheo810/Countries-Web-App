import { apiGet } from "./client";

const FIELDS = "names.common,capitals,region,population,flag,codes.alpha_3";

export function searchCountries({ search, region } = {}, opts) {
  const params = new URLSearchParams();
  params.set("response_fields", FIELDS);
  params.set("limit", "100");

  if (search) params.set("q", search);
  if (region) params.set("region", region);

  return apiGet(`?${params.toString()}`, opts);
}
