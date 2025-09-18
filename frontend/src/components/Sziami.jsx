import './sziami.css';

const Sziami = ({sziami}) => {
  return (
    <div className="tartalom-kontener">
        <h1>{sziami.cim}</h1>
        <p>{sziami.tartalom}</p>
        <div className="sziami-kep-kontener">
            <img src={sziami.kep} alt={sziami.kep} />
        </div>
    </div>
  )
}

export default Sziami;