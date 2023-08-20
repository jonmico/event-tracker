import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink className={`${styles.link} ${styles.main}`}>
          Event Tracker
        </NavLink>
      </div>
      <div>
        <div>
          <NavLink className={styles.link}>Sign Up</NavLink>
          <NavLink className={styles.link}>Login</NavLink>
          <NavLink className={styles.link}>Not Sure Yet</NavLink>
        </div>
      </div>
    </nav>
  );
}
