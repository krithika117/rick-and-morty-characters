import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardComponent from '../components/Card/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = () => {
    const [characters,
        setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setCharacters(response.data.results);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-3">
            <h1 className="my-5 fw-bolder">Rick and Morty Characters</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {characters.map((character) => (
                    <div key={character.id} className="col">
                        <CardComponent character={character}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
