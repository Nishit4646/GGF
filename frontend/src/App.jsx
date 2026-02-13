import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AwardsPage from './pages/AwardsPage';
import BlogPage from './pages/BlogPage';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import GalleryPage from './pages/GalleryPage';
import MeetPage from './pages/MeetPage';
import ContactUs from './pages/ContactUs';

import './app.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Header />

          <main className="main-content">
            <Routes>

              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Static Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/meet" element={<MeetPage />} />

              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/post-1" element={<BlogPost1 />} />
              <Route path="/blog/post-2" element={<BlogPost2 />} />
              <Route path="/blog/post-3" element={<BlogPost3 />} />

              {/* Contact */}
              <Route path="/contact" element={<ContactUs />} />

              {/* 404 Fallback */}
              <Route path="*" element={<Home />} />

            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;