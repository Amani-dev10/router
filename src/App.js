 
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './components/Description';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  
  const handleAdd= (newMovie) => setMovies([...movies,newMovie]);

  const handleText = (e) => setText(e.target.value);
  
  const handleRating = (x) => setRating(x);

  return (
    <div className="App">
      
      <Search rating={rating} text={text} handleText={handleText} handleRating={handleRating} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies.filter(el =>el.name.toLowerCase().includes(text.toLowerCase()) 
      && (el.rating >= rating))} />} />
        <Route path="/:name" element={<Description data={movies}/> }/>

      </Routes>
      </BrowserRouter>
      <AddMovie add={handleAdd} />
  
    </div>
  );
}

export default App;
