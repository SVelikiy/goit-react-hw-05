import { NavLink } from "react-router-dom"
import clsx from "clsx";
import css from './Navigation.module.css'


const navLinkClass = (props) => {
return clsx(css.link, props.isActive && css.activeLink);
}

export default function Navigation () {
    return (
      <div className={css.header}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    );
}