import { Link, Outlet } from "react-router-dom";
import './Cats.css';

const Cats = () => {
  return (
    <div className="cats-kontener">
      <div className="sidebar-kontener">
        <Link to='/cats/sziamis'>Sziámik</Link>
        <Link to='/cats/brits'>Brit rövidszőrűk</Link>
      </div>
      <div className="cats-main-kontener"><Outlet /></div>
    </div>
  );
}

export default Cats;