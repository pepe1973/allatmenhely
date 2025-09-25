import { useState, useEffect } from 'react';
import './Csivava.css';
// import adatok from '../../../backend/public/js/adatok';

const Csivava = ({ csiva }) => {
    let [csivavaItems, setCsivavaItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        for (let i = 0; i < csiva.kep.length; i++) {
            tomb.push(<img key={i} src={csiva.kep[i]} />);
        }
    
        setCsivavaItems(tomb);
    }, []);
    
    return (
    <div className="tartalom-kontener">
        <h1>{csiva.cim}</h1>
        <p>{csiva.tartalom}</p>
        <div className="csivava-kep-kontener">{csivavaItems}</div>
    </div>
    );
};

export default Csivava;
