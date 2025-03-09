import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
      <Link className="navbar-brand isport-brand" to="/home">
  ISport
</Link>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <Link className="nav-link" to="/home">
                OverView
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorite">
                Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
          
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUS">
                ContactUS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
