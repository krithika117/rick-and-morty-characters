import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../components/Card/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...data.results
      ]);
      if (data.info && data.info.next) {
        fetchData(data.info.next);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-3">
      <h1 className="my-5 fw-bolder">Rick and Morty Characters</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {characters.map((character) => (
          <div key={character.id} className="col">
            <CardComponent character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
