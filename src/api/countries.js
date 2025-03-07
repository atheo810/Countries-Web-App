import { apiGet } from "./client";

const FIELDS = "name,capital,region,population,flags,cca3";

export const getAllCountries = (opts) => apiGet(`/all?fields=${FIELDS}`, opts);

export const getCountriesByName = (name, opts) =>
  apiGet(`/name/${encodeURIComponent(name)}?fields=${FIELDS}`, opts);

export const getCountriesByRegion = (region, opts) =>
  apiGet(`/region/${region}?fields=${FIELDS}`, opts);
