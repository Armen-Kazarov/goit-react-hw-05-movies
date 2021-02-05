import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.navigationBar}>
    <NavLink to="/" className={s.link} activeClassName={s.activeLink} exact>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
