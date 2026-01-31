import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layout/header.jsx';
import PostPage from "./pages/postPage";
// MODIFICATION: Imported the NewsProvider to wrap the app
import { NewsProvider } from "./context/NewsContext"; 
import Footer from './components/layout/footer.jsx';
import ContactPage from "./pages/contact"; // Add this line at the top
import AboutPage from './pages/about';
import PrivacyPage from './pages/privacy.jsx';
import TermsPage from './pages/terms.jsx';

function App() {
  // MODIFICATION: Removed 'const [searchQuery, setSearchQuery] = useState("");' 
  // This state now lives inside NewsContext.jsx
  
  return (
   <NewsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Default path redirects to /home */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* 2. ADD THIS LINE: Explicit route for contact */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="privacy" element={<PrivacyPage />}  />
          <Route path="/terms" element={<TermsPage />} />
         {/* Dynamic path that captures the category name */}
          <Route path="/:category" element={<PostPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;
