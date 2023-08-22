import { NavLink, Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div>
          <Link to={'/'} className={`${styles.link} ${styles.main}`}>
            Event Tracker
          </Link>
        </div>
        <div>
          <div>
            <NavLink to={'/signup'} className={styles.link}>
              Sign Up
            </NavLink>
            <NavLink to={'/login'} className={styles.link}>
              Login
            </NavLink>
            <NavLink to={'/events'} className={styles.link}>
              Browse Events
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
