import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layout/header.jsx';
import PostPage from "./pages/postPage";

import { NewsProvider } from "./context/NewsContext"; 
import Footer from './components/layout/footer.jsx';
import ContactPage from "./pages/contact"; 
import AboutPage from './pages/about';
import PrivacyPage from './pages/privacy.jsx';
import TermsPage from './pages/terms.jsx';

function App() {


  return (
    <NewsProvider>
      <BrowserRouter>
        {/* 1. Added a wrapper div with min-h-screen and flex-col */}
        <div className="flex flex-col min-h-screen">
          
          <Header />

          {/* 2. Wrapped Routes in a main tag with flex-grow */}
          {/* This pushes the footer down even if the page content is empty or loading */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/:category" element={<PostPage />} />
            </Routes>
          </main>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;
