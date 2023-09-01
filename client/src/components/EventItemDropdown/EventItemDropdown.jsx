import styles from './EventItemDropdown.module.css';

export default function EventItemDropdown({ event }) {
  const { createdAt } = event;

  const formattedCreatedAt = new Date(createdAt).toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <div className={styles.dropDownData}>
      <div>
        <h4>Author</h4>
        <p>{event.author.firstName}</p>
      </div>
      <div>
        <h4>Location</h4>
        <p>{event.location?.name}</p>
      </div>
      <div>
        <h4>Waitlist</h4>
        <p>{event.isWaitlist ? 'Yes' : 'No'}</p>
      </div>
      <div>
        <h4>Date Created</h4>
        <p>{formattedCreatedAt}</p>
      </div>
      <div>
        <h4>Keywords</h4>
        <p>{event.keywords.map((word) => word)}</p>
      </div>
    </div>
  );
}
