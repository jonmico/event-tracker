import { useState, useEffect } from 'react';

import EventItem from '../EventItem/EventItem';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [eventListError, setEventListError] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/api/events`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Oops! Looks like there was an error: ${res.status}`);
        }
        const data = await res.json();
        setEventList(data);
        console.log(data);
      } catch (err) {
        setEventListError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div>
      {eventList.map((event) => (
        <EventItem key={event._id}>{event.name}</EventItem>
      ))}
    </div>
  );
}
