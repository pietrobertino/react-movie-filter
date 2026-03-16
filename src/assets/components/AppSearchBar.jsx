export default function AppSearchBar({ movie, handleSearch }) {

    return (
        <input type="text" className="form-control my-3 border-secondary-subtle"
            value={movie}
            placeholder="Search movie"
            onChange={(e) => handleSearch(e.target.value)} />
    )
}