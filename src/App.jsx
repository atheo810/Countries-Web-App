import Footer from "./components/Footer";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CountryList from "./components/CountryList";

function App() {
  const [filters, setFilters] = useState({ search: "", region: "" });

  function handleSearch(newFilters) {
    setFilters(newFilters);
  }

  return (
    <>
      <Navbar />
      <Hero onSearch={handleSearch} />
      <CountryList filters={filters} />
      <Footer />
    </>
  );
}

export default App;
