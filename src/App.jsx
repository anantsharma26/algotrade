import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Strategies from "./pages/Strategies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Wiki from "./pages/Wiki";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
