import './search.css';

const Search = () => {
    return (
        <div className="Search">
            <form>
                <input type="text" placeholder="Search for city" name="search" required />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;