import styles from './EventItemDropdown.module.css';

export default function EventItemDropdown({ event }) {
  return (
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
  );
}
