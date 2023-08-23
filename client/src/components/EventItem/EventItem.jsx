import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  return (
    <li className={styles.listItem}>
      <h2>{event.name}</h2>
      <p>{event.location.name}</p>
      <p>{event.date}</p>
    </li>
  );
}
