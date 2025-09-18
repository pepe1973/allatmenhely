import './Brit.css';

const Brit = ({ brit }) => {
  return (
    <div className="tartalom-kontener">
        <h1>{brit.cim}</h1>
        <p>{brit.tartalom}</p>
        <div className="brit-kep-kontener">
            <img src={brit.kep} alt={brit.kep} />
        </div>
    </div>
  )
}

export default Brit;