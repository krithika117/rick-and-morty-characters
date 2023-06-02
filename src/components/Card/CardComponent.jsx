import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    return (
        <div
            className="card shadow mb-3 mx-0 d-flex flex-row align-items-center">
            <img src={character.image} className="card-img" alt={character.name}/>
            <div className="card-body">
                <h3 className="card-title fw-bolder">{character.name}</h3>
                <div className="d-flex align-items-center">
                    <div className={`rounded-circle me-2 ${statusColorClass} small`}></div>
                    {character.status} - {character.species}
                </div>
                <div className="d-flex align-items-center small fw-normal">
                    <div className="small">
                        Last known location: {character.location.name}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
