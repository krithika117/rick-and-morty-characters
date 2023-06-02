import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext from '../../contexts/ThemeContext';

const getStatusColorClass = (status) => {
    switch (status) {
        case 'Alive':
            return 'bg-success';
        case 'Dead':
            return 'bg-danger';
        case 'unknown':
            return 'bg-secondary';
        default:
            return '';
    }
};

const CardComponent = ({character}) => {
    const statusColorClass = getStatusColorClass(character.status);
    const theme = useContext(ThemeContext);

    return (
        <div className={`card shadow mb-3 mx-0 d-flex flex-row align-items-center ${theme.isDarkMode ? 'bg-black' : 'bg-light'}`}>

            <img src={character.image} className="card-img" alt={character.name}/>
            <div className="card-body">
                <h4 className="card-title fw-bolder">{character.name}</h4>
                <div className="d-flex align-items-center">
                    <div className={`rounded-circle me-2 ${statusColorClass} `}></div>
                    {character.status} - {character.species}
                </div>
                <div className="d-flex align-items-center fw-normal">
                    <div className="">
                        Last known location: {character.location.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
