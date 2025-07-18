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
        <Route path="/project-test-dimas-adityea/" element={<Ideas />} />
        <Route path="/project-test-dimas-adityea/About" element={<About />} />
        <Route path="/project-test-dimas-adityea/Contact" element={<Contact />} />
        <Route path="/project-test-dimas-adityea/Ideas" element={<Ideas />} />
        <Route path="/project-test-dimas-adityea/Services" element={<Services />} />
        <Route path="/project-test-dimas-adityea/Work" element={<Work />} />
        <Route path="/project-test-dimas-adityea/Careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
