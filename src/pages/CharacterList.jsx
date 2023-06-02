import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import CardComponent from '../components/Card/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../components/Spinner/Spinner';

const CharacterList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const theme = useContext(ThemeContext);

  const fetchData = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  };

  const { data: characters, status } = useQuery('characters', fetchData);

  if (status === 'loading') {
    return <Spinner/>;
  }
  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  const handleSearch = async (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue}`);
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const charactersToDisplay = searchTerm ? searchResults : characters;

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn border-0 bg-transparent" onClick={theme.toggleTheme}>
          {theme.isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </div>
      <h1 className="mb-2 fw-bolder">Rick and Morty Characters</h1>
      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {charactersToDisplay.map((character) => (
          <div key={character.id} className="col">
            <CardComponent character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
