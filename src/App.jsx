import { useState, useEffect } from "react"

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


  useEffect(() => {
    //dobbiamo fare in modo che a seconda del filtro scelto, la filtered list cambi
    const newList = movieList.filter((movie) => movie.genre.toLowerCase().includes(selectedGenre))
    setFilteredList(newList)

  }, [movieList, selectedGenre])

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

        <div className="mb-3">
          <label htmlFor="genres" className="form-label">Genre</label>
          <select
            className="form-select form-select-lg border-secondary-subtle"
            name="genres"
            id="genres"
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {/* dobbiamo capire come fare in modo che le opzioni siano collegate con selectedGenre */}
            <option value="">Tutti i film</option>
            <option value="fantascienza">Fantascienza</option>
            <option value="thriller">Thriller</option>
            <option value="romantico">Romantico</option>
            <option value="azione">Azione</option>
          </select>
        </div>


        <input type="text" className="form-control my-3 border-secondary-subtle" value={movie} placeholder="Search movie" onChange={(e) => handleSearch(e.target.value)} />


        <ul className=" list-group">
          {filteredList.map((movie) => (
            <li key={movie.title} className=" list-group-item border-secondary-subtle">{movie.title}</li>
          ))}
        </ul>

        <form className="mt-5 text-center" onSubmit={handleSubmit}>
          <h3 className=" text-start">Add new movie</h3>
          <input type="text" className="form-control my-3 border-secondary-subtle"
            placeholder="Type new movie's title... "
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)} />
          <input type="text" className="form-control  border-secondary-subtle"
            placeholder="Type new movie's genre... "
            value={newGenre}
            onChange={e => setNewGenre(e.target.value)} />
          <button type="submit" className=" btn btn-info mt-3">Upload new movie</button>
        </form>

      </div>

    </>
  )
}

export default App
