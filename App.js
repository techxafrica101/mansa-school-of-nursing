import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Leadership from './pages/Leadership';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import StudentPortal from './pages/StudentPortal';
import News from './pages/News';
import Contact from './pages/Contact';
import Accessibility from './pages/Accessibility';

function App() {
  // Get the basename from package.json homepage for GitHub Pages
  const basename = process.env.NODE_ENV === 'production' 
    ? '/mansa-school-of-nursing' 
    : '';

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
