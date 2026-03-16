export default function AppSelectGenre({ setSelectedGenre, genreSet }) {


    return (

        <div className="mb-3">
            <label htmlFor="genres" className="form-label">Seleziona il genere</label>
            <select
                className="form-select form-select-lg border-secondary-subtle"
                name="genres"
                id="genres"
                onChange={(e) => setSelectedGenre(e.target.value)}>
                {/* dobbiamo capire come fare in modo che le opzioni siano collegate con selectedGenre */}
                <option value="">Tutti i film</option>
                {/* creare un option per ogni genere nella lista movieList, che essendo una variabile reattiva aggiornerà automaticamente gli elementi */}
                {genreSet.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>
        </div>

    )
}