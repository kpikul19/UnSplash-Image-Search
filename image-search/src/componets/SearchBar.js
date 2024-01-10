import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();  // stops the normal form submit from happening - this is what we want because the normal form submit will make the page reload

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
        </form>
        </div>;
}

export default SearchBar;