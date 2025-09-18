import { Link, Outlet } from "react-router-dom";
import './Dogs.css';

const Dogs = () => {
  return (
    <div className="dogs-kontener">
      <div className="sidebar-kontener">
        <Link to='/dogs/csivavas'>Csivavák</Link>
        <Link to='/dogs/dobermans'>Dobermannok</Link>
      </div>
      <div className="dogs-main-kontener"><Outlet /></div>
    </div>
  )
}

export default Dogs;