import { Link } from 'react-router-dom';

import styles from './EventNavbar.module.css';

export default function EventNavbar() {
  return (
    <nav className={styles.eventNav}>
      <h2>Events</h2>
      <ul className={styles.linkList}>
        <li></li>
        <li className={styles.listItem}>
          <Link className={styles.link} to={'create'}>
            Create Event
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to={'browse'}>
            Browse Events
          </Link>
        </li>
      </ul>
    </nav>
  );
}
