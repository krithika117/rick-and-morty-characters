import React from 'react';
import { RingLoader } from 'react-spinners';

import './Spinner.css'; 

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <RingLoader size={150} color={'#000'} loading={true} />
      </div>
    </div>
  );
};

export default Spinner;
