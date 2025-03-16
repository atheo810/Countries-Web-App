import { useState } from "react";
import Hero from "../components/Hero";
import CountryList from "../components/CountryList";

export default function Explore() {
  const [filters, setFilters] = useState({ search: "", region: "" });

  return (
    <>
      <Hero onSearch={setFilters} />
      <CountryList filters={filters} />
    </>
  );
}
