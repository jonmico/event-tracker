import styles from './EventItemHeader.module.css';

export default function EventItemHeader({ name, location, date }) {
  return (
    <>
      <h3 className={styles.eventItemData}>{name}</h3>
      <p className={styles.eventItemData}>{location?.name}</p>
      <p className={styles.eventItemData}>
        {date.toLocaleString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </>
  );
}
