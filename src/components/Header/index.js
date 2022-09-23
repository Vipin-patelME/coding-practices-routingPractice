// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="wave"
      />
      <p className="nav-para">Wave</p>
    </div>
    <div className="nav-para-cont">
      <p>
        <Link to="/" className="nav-para">
          Home
        </Link>
      </p>
      <p>
        <Link to="/about" className="nav-para">
          About
        </Link>
      </p>
      <p>
        <Link to="/contact" className="nav-para">
          Contact
        </Link>
      </p>
    </div>
  </nav>
)

export default Header
