import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="topbarLinks">
    <Link to="/register" className="topbarLink">RegisterPage</Link>
    <Link to="/login" className="topbarLink">LoginPage</Link>
    <Link to="/" className="topbarLink">Homepage</Link>
    <Link to="/profile" className="topbarLink">ProfilePage</Link>
  </div>
  )
}

export default Nav