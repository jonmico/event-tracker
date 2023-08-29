// TODO: Implement this form. Use placeholder ID for each event so we can
// filter by author.

import { useState } from 'react';
import styles from './CreateEventForm.module.css';

export default function CreateEventForm() {
  return (
    <form className={styles.createEventForm}>
      <h1 className={styles.title}>Create Event</h1>
      <div className={styles.formRow1}>
        <div>
          <label className={styles.label} htmlFor='eventName'>
            Event Name
          </label>
          <input className={styles.input} type='text' id={'eventName'} />
        </div>
        <div>
          <label className={styles.label} htmlFor='date'>
            Date
          </label>
          <input className={styles.input} type='date' />
        </div>
        <div>
          <label className={styles.label} htmlFor='time'>
            Time
          </label>
          <input className={styles.input} type='time' />
        </div>
      </div>
    </form>
  );
}
