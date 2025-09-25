import { useState, useEffect } from "react";
import Csivava from "./Csivava";
// import adatok from '../../public/js/adatok';

const Csivavas = () => {
    let [csivavaItems, setCsivavaItems] = useState([]);
    let tomb = [];

    useEffect(() => {
        const szerverrolBetolt = async () => {
            const response = await fetch('http://localhost:3600/dogs/csivavas');
            const bejovoAdatok = await response.json();
            const adatok = bejovoAdatok.adatok;

            if (response.ok)
            {
                console.log(adatok);
                for (let i = 0; i < adatok.length; i++) {
                    tomb.push(<Csivava key={i} csiva={adatok[i]} />);
                }
        
                setCsivavaItems(tomb);
            } 
            else console.log(adatok.msg);

        }

        szerverrolBetolt();
        
    }, []);

    return (
        <div>
            <div className="main-kontener">{csivavaItems}</div>;
        </div>
    );
}

export default Csivavas;