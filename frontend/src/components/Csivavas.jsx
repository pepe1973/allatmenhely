import { useState, useEffect } from "react";
import Csivava from "./Csivava";
import adatok from '../../public/js/adatok';

const Csivavas = () => {
    let [csivavaItems, setCsivavaItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        for (let i = 0; i < adatok.length; i++) {
            tomb.push(<Csivava key={i} csiva={adatok[i]} />);
        }
    
        setCsivavaItems(tomb);
    }, []);

    return (
        <div>
            <div className="main-kontener">{csivavaItems}</div>;
        </div>
    );
}

export default Csivavas;