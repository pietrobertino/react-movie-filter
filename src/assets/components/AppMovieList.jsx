export default function AppMovieList({ filteredList }) {

    return (
        <ul className=" list-group">
            {filteredList.map((movie) => (
                <li key={movie.title} className=" list-group-item border-secondary-subtle">{movie.title}</li>
            ))}
        </ul>
    )
}