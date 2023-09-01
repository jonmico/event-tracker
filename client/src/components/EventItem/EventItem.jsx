import { useState } from 'react';

import DropdownIcon from '../DropdownIcon/DropdownIcon';
import EventItemHeader from '../EventItemHeader/EventItemHeader';
import EventItemDropdown from '../EventItemDropdown/EventItemDropdown';

import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const { name, location, date: eventDate } = event;

  const isoString = eventDate;
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
        <DropdownIcon isDroppedDown={isDroppedDown} />
        <EventItemHeader name={name} location={location} date={date} />
      </div>
      {isDroppedDown && <EventItemDropdown event={event} />}
    </li>
  );
}
