import { Routes, Route } from 'react-router-dom';
import './App.css';
import PostPage from "./pages/postPage";
import Cards from './components/common/cards.jsx';
import { Car } from 'lucide-react';

function App() {
  
  return (
   <>
      <PostPage />  
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working 🚀
      </h1>
      <Cards />
      
   </>
     );
}

export default App;