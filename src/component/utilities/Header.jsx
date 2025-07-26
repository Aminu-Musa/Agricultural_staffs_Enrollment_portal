import { NavLink } from 'react-router-dom'
import arcn_logo from '../../assets/arcn-logo.svg'


const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">

        <div className="header__logo">
          <NavLink to="/" className="header__logo-link">
            <img src={arcn_logo} alt="ARCN Logo" className="header__logo-image" />
          </NavLink>
        </div>

        <ul className="header__links">
          <li>
            <NavLink to="/" className="header__link" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="header__link" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="header__link" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="header__link" activeClassName="active">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register" className="header__link" activeClassName="active">Register</NavLink>
          </li>
          <li>
            <NavLink to="/enrollment" className="header__link" activeClassName="active">Enrollment</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header