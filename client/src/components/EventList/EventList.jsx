import { useState, useEffect } from 'react';

import EventItem from '../EventItem/EventItem';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function EventList({ setEventListError }) {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/api/events`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error(
            'Uh-oh. Something went wrong when fetching events. Please try again later.'
          );
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

  const list = eventList.length ? (
    eventList.map((event) => <EventItem event={event} key={event._id} />)
  ) : (
    <p>Uh-oh, it seems there are no events at the moment!</p>
  );

  return <div>{isLoading ? <p>Loading...</p> : list}</div>;
}
