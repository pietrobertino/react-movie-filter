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


  useEffect(() => {
    //dobbiamo fare in modo che a seconda del filtro scelto, la filtered list cambi
    const newList = movieList.filter((movie) => movie.genre.toLowerCase().includes(selectedGenre))
    setFilteredList(newList)

  }, [movieList, selectedGenre])

  return (
    <>
      <div className="container">

        <h1 className=" text-center py-3">Movie list</h1>

        <div className="mb-3">
          <label htmlFor="genres" className="form-label">Genre</label>
          <select
            className="form-select form-select-lg"
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

        <ul>
          {filteredList.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>

      </div>

    </>
  )
}

export default App
