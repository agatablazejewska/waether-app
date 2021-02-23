import '../styles/search.css';
import React, { useContext, useState } from 'react';
import CityContext from '../context/CityContext';

const Search = () => {
    const [localCity, setLocalCity] = useState('');
    const [_city, setCity] = useContext(CityContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setCity(localCity);
    }

    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a city..." name="city"
                       onChange={e => setLocalCity(e.target.value)} required />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;