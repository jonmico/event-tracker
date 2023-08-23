import { useState } from 'react';

import EventList from '../../components/EventList/EventList';

export default function Events() {
  const [eventListError, setEventListError] = useState('');
  return (
    <div className={'mainWrapper'}>
      <h1>Browse Events</h1>
      {!eventListError ? (
        <EventList setEventListError={setEventListError} />
      ) : (
        <p>{eventListError}</p>
      )}
    </div>
  );
}
