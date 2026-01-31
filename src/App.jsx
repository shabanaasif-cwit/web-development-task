import './App.css';

import Header from './components/layout/header.jsx';
import PostPage from "./pages/postPage";
// MODIFICATION: Imported the NewsProvider to wrap the app
import { NewsProvider } from "./context/NewsContext"; 

function App() {
  // MODIFICATION: Removed 'const [searchQuery, setSearchQuery] = useState("");' 
  // This state now lives inside NewsContext.jsx
  
  return (
    <NewsProvider>
      {/* MODIFICATION: Removed props (searchQuery/setSearchQuery) from Header */}
      <Header /> 
      
      {/* MODIFICATION: Removed <main> wrapper as it exists inside PostPage */}
      {/* MODIFICATION: Removed props from PostPage */}
      <PostPage /> 
    </NewsProvider>
  );
}

export default App;
