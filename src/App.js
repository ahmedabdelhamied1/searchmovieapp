import './App.css';
import { useEffect } from 'react';
import SearchMovies from './components/SearchMovies';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
    <div className='container' >
     <p className='title'> React Movie Search</p>
     <SearchMovies/>
    </div>
   <Footer/>
   </>

  );
}

export default App;
