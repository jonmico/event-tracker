import styles from './EventItem.module.css';

export default function EventItem({ event }) {
  return (
    <div>
      <h1>{event.name}</h1>
    </div>
  );
}
