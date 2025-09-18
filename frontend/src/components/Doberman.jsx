import './Doberman.css';

const Doberman = ({ dobi }) => {
    return (
        <div className="tartalom-kontener">
            <h1>{dobi.cim}</h1>
            <p>{dobi.tartalom}</p>
            <div className="doberman-kep-kontener">
                <img src={dobi.kep} alt={dobi.kep} />
            </div>
        </div>
    );
};

export default Doberman;
