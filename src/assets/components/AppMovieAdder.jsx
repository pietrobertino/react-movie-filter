export default function AppMovieAdder({ handleSubmit, newTitle, setNewTitle, newGenre, setNewGenre }) {

    return (

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
            <button type="submit" className=" btn btn-success mt-3">Upload new movie</button>
        </form>
    )
}