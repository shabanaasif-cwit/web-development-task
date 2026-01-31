import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/layout/header.jsx';
import PostPage from "./pages/postPage";
// MODIFICATION: Imported the NewsProvider to wrap the app
import { NewsProvider } from "./context/NewsContext"; 

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
          {/* Dynamic route: the ':category' part becomes a variable */}
          <Route path="/:category" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;
