// TODO: Implement this form. Use placeholder ID for each event so we can
// filter by author.

import { useState } from 'react';

import Button from '../Button/Button';

import styles from './CreateEventForm.module.css';

export default function CreateEventForm() {
  const [eventName, setEventName] = useState('');
  const [eventNameError, setEventNameError] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    setEventNameError('OH MY GOD');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.createEventForm}>
      <h1 className={styles.title}>Create Event</h1>
      <div className={styles.formRow}>
        <div>
          <label className={styles.label} htmlFor='eventName'>
            Event Name
          </label>
          <input
            value={eventName}
            onChange={(evt) => setEventName(evt.target.value)}
            className={styles.input}
            type='text'
            id={'eventName'}
          />
          {eventNameError && <p className={styles.error}>{eventNameError}</p>}
        </div>
        <div>
          <label className={styles.label} htmlFor='date'>
            Date
          </label>
          <input className={styles.input} type='date' id={'date`'} />
        </div>
        <div>
          <label className={styles.label} htmlFor='time'>
            Time
          </label>
          <input className={styles.input} type='time' id={'time'} />
        </div>
      </div>
      <div className={styles.formRow}>
        <div>
          <label className={styles.label} htmlFor='maxAttending'>
            Max Attendees
          </label>
          <input className={styles.input} type='number' id={'maxAttending'} />
        </div>
        <div>
          <label className={styles.label} htmlFor='keywords'>
            Keywords
          </label>
          <select className={styles.input} id='keywords'>
            <option value='select'>Select</option>
            <option value='children'>Children</option>
            <option value='teen'>Teen</option>
            <option value='adult'>Adult</option>
            <option value='all'>All</option>
          </select>
        </div>
      </div>
      <div>
        <div className={styles.checkboxWrapper}>
          <label className={styles.label} htmlFor='isWaitlist'>
            Waitlist?
          </label>
          <input
            className={styles.checkbox}
            type='checkbox'
            id={'isWaitlist'}
          />
        </div>
      </div>
      <div>
        <Button buttonStyle={'createEventButton'}>Create Event</Button>
      </div>
    </form>
  );
}
