import { useState, useEffect } from "react"
import AppSelectGenre from "./assets/components/AppSelectGenre";
import AppSearchBar from "./assets/components/AppSearchBar";
import AppMovieList from "./assets/components/AppMovieList";
import AppMovieAdder from "./assets/components/AppMovieAdder";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  const [movieList, setMovieList] = useState(movies);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movie, setMovie] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [genreSet, setGenreSet] = useState([]);


  useEffect(() => {
    //dobbiamo fare in modo che a seconda del filtro scelto, la filtered list cambi
    const newList = movieList.filter((movie) => movie.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
    setFilteredList(newList)

  }, [movieList, selectedGenre])


  useEffect(() => {
    const newGenreSet = new Set();
    movieList.forEach(film => newGenreSet.add(film.genre))
    setGenreSet([...newGenreSet])
  }, [movieList])

  function handleSearch(input) {
    setMovie(input)
    //dobbiamo fare in modo da prendere quest'input e usarlo per cercare tra i titoli dell'array, e quindi filtrare la lista
    const newList = movieList.filter((film) => film.title.toLowerCase().includes(input.toLowerCase()))
    setFilteredList(newList)
  }

  function handleSubmit(e) {
    e.preventDefault();
    //dobbiamo fare in modo che la lista di film venga aggiornata con i dati del film aggiunto
    const newMovie = {
      title: newTitle,
      genre: newGenre
    }
    setMovieList([...movieList, newMovie])
    setNewGenre("");
    setNewTitle("");
  }



  return (
    <>
      <div className="container">

        <h1 className=" text-center py-3">Movie list</h1>

        <AppSelectGenre setSelectedGenre={setSelectedGenre} genreSet={genreSet} />

        <AppSearchBar movie={movie} handleSearch={handleSearch} />

        <AppMovieList filteredList={filteredList} />

        <AppMovieAdder handleSubmit={handleSubmit} newTitle={newTitle} setNewTitle={setNewTitle} newGenre={newGenre} setNewGenre={setNewGenre} />

      </div>

    </>
  )
}

export default App
