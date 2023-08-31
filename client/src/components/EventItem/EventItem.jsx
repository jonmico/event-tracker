import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faCaretDown,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import styles from './EventItem.module.css';

// TODO: Work on dropdown button. Find out how to not mess up the layout
// Consider getting rid of goofy Name, Location, Date header and adding
// filter options below the Events Nav on the left?

export default function EventItem({ event }) {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const isoString = event.date;
  const date = new Date(isoString);

  function handleClick() {
    setIsDroppedDown((prev) => !prev);
  }

  return (
    <li
      onClick={handleClick}
      className={`${styles.listItem} ${isDroppedDown ? styles.selected : ''}`}
    >
      <div className={styles.eventItem}>
        <div className={styles.dropDownIcon}>
          {!isDroppedDown ? (
            <FontAwesomeIcon
              icon={faPlus}
              // size={'sm'}
              // style={{ color: '#180f02' }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMinus}
              // size='sm'
              // style={{ color: '#180f02' }}
            />
          )}
        </div>
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
