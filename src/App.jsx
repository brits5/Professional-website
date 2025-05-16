import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      {/* Aquí podrías añadir más secciones como Features, Testimonials, etc. */}
    </div>
  );
}

export default App;