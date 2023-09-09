import { useLoaderData } from 'react-router-dom';

// import styles from './EventDetail.module.css';

import { getEvent } from '../../services/apiEvents';

export async function loader({ params }) {
  const event = await getEvent(params.id);
  return event;
}

export default function EventDetail() {
  const event = useLoaderData();

  return (
    <div>
      <h1>this is an h1 element in EventDetail</h1>
      {event.name}
    </div>
  );
}
