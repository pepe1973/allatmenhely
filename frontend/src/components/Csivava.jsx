import './Csivava.css';

const Csivava = ({ csiva }) => {
    return (
    <div className="tartalom-kontener">
        <h1>{csiva.cim}</h1>
        <p>{csiva.tartalom}</p>
        <div className="csivava-kep-kontener">
            <img src={csiva.kep} alt={csiva.kep} />
        </div>
    </div>
    );
};

export default Csivava;
