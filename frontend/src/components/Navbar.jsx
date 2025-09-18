import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-kontener">
        <Link to='/'>Home</Link>
        <Link to='/dogs/csivavas'>Kutyák</Link>
        <Link to='/cats/sziamis'>Macskák</Link>
    </div>
  );
}

export default Navbar;