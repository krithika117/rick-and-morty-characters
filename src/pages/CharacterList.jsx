import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardComponent from '../components/Card/CardComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character");
    }, []);

    const fetchData = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters((_characters) => {
            return [
                ..._characters,
                ...data.results
            ];
        });
        if (data.info && data.info.next) {
            fetchData(data.info.next);
        }
    };

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
