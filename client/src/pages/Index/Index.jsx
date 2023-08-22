import { Link } from 'react-router-dom';

import styles from './Index.module.css';

export default function Index() {
  return (
    <div className={'mainWrapper'}>
      <div className={styles.indexWrapper}>
        <h1>Welcome to Event Tracker</h1>
        <h2>
          An easy to use, all-in-one app to create and keep track of events.
        </h2>
        <div className={styles.linkWrapper}>
          <Link to={'signup'} className={styles.link}>
            Sign Up
          </Link>
          <Link className={styles.link}>Browse Events</Link>
        </div>
      </div>
    </div>
  );
}
