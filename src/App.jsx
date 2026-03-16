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

  return (
    <>
      <div className="container">
        <h1 className=" text-center">Movie list</h1>
        <div className="mb-3">
          <label htmlFor="genres" className="form-label">Genre</label>
          <select
            className="form-select form-select-lg"
            name="genres"
            id="genres"
          >
            <option value="fantascienza">Fantascienza</option>
            <option value="thriller">Thriller</option>
            <option value="romantico">Romantico</option>
            <option value="azione">Azione</option>
          </select>
        </div>

      </div>

    </>
  )
}

export default App
