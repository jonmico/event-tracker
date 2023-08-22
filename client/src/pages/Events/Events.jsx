import { useEffect, useState } from 'react';
import styles from './Events.module.css';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function Events() {
  const [eventList, setEventList] = useState();
  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch(`${BASE_URL}/api/events`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setEventList(data);
      console.log(data);
    }
    fetchEvents();
  }, []);
  return (
    <div className={'mainWrapper'}>
      <h1>Browse Events</h1>
      {eventList.map((event) => (
        <p key={event._id}>{event.name}</p>
      ))}
    </div>
  );
}
