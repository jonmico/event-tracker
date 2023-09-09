import { useParams } from 'react-router-dom';

// import styles from './EventDetail.module.css';
import { useEffect, useState } from 'react';

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState('');

  useEffect(
    function () {
      async function fetchEvent() {
        try {
          const res = await fetch(`/api/events/${id}`);

          if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status} error.`);
          }

          const data = await res.json();
          setEvent(data);
        } catch (err) {
          console.error(err);
        }
      }
      fetchEvent();
    },
    [id]
  );
  return (
    <div>
      <h1>this is an h1 element in EventDetail</h1>
      {event.name}
    </div>
  );
}
