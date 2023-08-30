import { useState } from 'react';
import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  const [isDropDown, setIsDropDown] = useState(false);

  const isoString = event.date;
  const date = new Date(isoString);

  return (
    <li className={styles.listItem}>
      <div className={styles.eventItem}>
        <h3 className={styles.eventItemData}>{event.name}</h3>
        <p className={styles.eventItemData}>{event.location.name}</p>
        <p className={styles.eventItemData}>
          {date.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
      {/* <div>
        <p>more info here</p>
      </div> */}
    </li>
  );
}
