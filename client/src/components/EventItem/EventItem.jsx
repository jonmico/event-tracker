import { useState } from 'react';
import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const isoString = event.date;
  const date = new Date(isoString);

  function handleClick() {
    setIsDroppedDown((prev) => !prev);
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.eventItem}>
        <span onClick={handleClick} className={styles.toggleButton}>
          {isDroppedDown ? '-' : '+'}
        </span>
        <h3 className={`${styles.eventItemData} ${styles.eventName}`}>
          {event.name}
        </h3>
        <p className={styles.eventItemData}>{event.location?.name}</p>
        <p className={styles.eventItemData}>
          {date.toLocaleString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
      {isDroppedDown && (
        <div className={styles.dropDownData}>
          <div>
            <h4>Author</h4>
            <p>{event.author.firstName}</p>
          </div>
          <div>
            <h4>Time</h4>
            <p>{event.time}</p>
          </div>
        </div>
      )}
    </li>
  );
}
