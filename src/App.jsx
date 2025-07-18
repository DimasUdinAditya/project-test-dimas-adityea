import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ideas from "./pages/Ideas";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Ideas />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Ideas" element={<Ideas />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
