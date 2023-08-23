import { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function EventList() {
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
    <div>
      {eventList?.map((event) => (
        <p key={event._id}>{event.name}</p>
      ))}
    </div>
  );
}
