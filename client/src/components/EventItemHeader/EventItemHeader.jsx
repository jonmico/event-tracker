import styles from './EventItemHeader.module.css';

export default function EventItemHeader({ event }) {
  const { name, date, time } = event;

  const eventDateTime = new Date(date);

  const formattedDate = eventDateTime.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  let formattedTime = null;

  if (time) {
    const [hours, minutes] = time.split(':').map(Number);
    eventDateTime.setHours(hours);
    eventDateTime.setMinutes(minutes);
    formattedTime = eventDateTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  return (
    <>
      <h3 className={styles.eventItemData}>{name}</h3>
      <p className={styles.eventItemData}>
        {formattedDate} @ {formattedTime}
      </p>
      <p className={styles.eventItemData}>
        {event.attendingList.length === event.maxAttending
          ? 'FULL'
          : `${event.attendingList.length} / ${event.maxAttending} attending`}
      </p>
    </>
  );
}
