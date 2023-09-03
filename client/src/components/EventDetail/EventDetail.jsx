import { useParams } from 'react-router-dom';

import styles from './EventDetail.module.css';
import { useEffect } from 'react';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export default function EventDetail() {
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchEvent() {
        try {
          const res = await fetch(`${BASE_URL}/api/events/${id}`);

          if (!res.ok) {
            throw new Error(`Something went wrong: ${res.status} error.`);
          }

          const data = await res.json();
          console.log(data);
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
    </div>
  );
}
