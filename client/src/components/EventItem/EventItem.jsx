import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  const isoString = event.date;
  const date = new Date(isoString);

  return (
    <li className={styles.listItem}>
      <h3 className={styles.listItemData}>{event.name}</h3>
      <p className={styles.listItemData}>{event.location.name}</p>
      <p className={styles.listItemData}>
        {date.toLocaleString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </li>
  );
}
