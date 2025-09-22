import { useState, useEffect } from "react";
import Csivava from "./Csivava";
import adatok from "../../public/js/adatok";

const Csivavas = () => {
  let [csivavaItems, setCsivavaItems] = useState([]);
  let tomb = [];

  useEffect(() => {
    const leker = async () => {
      const adatok = await fetch("http://localhost:3700/dogs/csivavas");

      if (adatok.ok) {
        const ered = await adatok.json();
        console.log(ered);
      } else {
        const hiba = await adatok.json();
        console.log(hiba);
      }
    };

    leker();

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
};

export default Csivavas;
