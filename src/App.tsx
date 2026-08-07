// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RespawnNation from "./components/ProjectDetails/RespawnNation/RespawnNation";

// 1. Import the new component
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* 2. Put it right here at the top of your router! */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#0c0c0d] text-zinc-400 font-sans antialiased selection:bg-zinc-700 selection:text-white">
        <Navbar />
        <main className="w-full selection:bg-zinc-700">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/respawn-nation" element={<RespawnNation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;