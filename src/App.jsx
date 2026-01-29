import { useState } from 'react';
import './App.css';
import Header from './components/layout/header.jsx';
import PostPage from "./pages/postPage";

function App() {
  // This is the "brain" shared by both components
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
   <>
      {/* Pass the state to Header so it can update it */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main>
        {/* Pass the state to PostPage so it can filter the posts */}
        <PostPage searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
      </main>
   </>
  );
}

export default App;