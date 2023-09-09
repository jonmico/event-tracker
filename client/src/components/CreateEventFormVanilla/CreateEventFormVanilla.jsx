import { useState } from 'react';

import Button from '../Button/Button';

import styles from './CreateEventFormVanilla.module.css';
import { createEvent } from '../../services/apiEvents';
import { Form } from 'react-router-dom';

// TODO: Make vanilla form. Move over to an action.

export default function CreateEventFormVanilla() {
  const [isWaitlist, setIsWaitlist] = useState(false);
  return (
    <Form method={'POST'} className={styles.createEventForm}>
      <h1 className={styles.title}>Create Event</h1>

      <div className={styles.formRow}>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='name'>
            Event Name
          </label>
          <input className={styles.input} type='text' id={'name'} required />
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='date'>
            Date
          </label>
          <input className={styles.input} type='date' id={'date'} required />
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='time'>
            Time
          </label>
          <input className={styles.input} type='time' id={'time'} required />
        </div>
        <div className={styles.formInputWrapper}>
          <label htmlFor='location' className={styles.label}>
            Location
          </label>
          <input type='text' className={styles.input} required />
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='maxAttending'>
            Max Attendees
          </label>
          <input
            placeholder={40}
            className={styles.input}
            type='text'
            id={'maxAttending'}
          />
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='keywords'>
            Keywords
          </label>
          <select className={styles.input} id='keywords' required>
            <option value=''>Select</option>
            <option value='children'>Children</option>
            <option value='teen'>Teen</option>
            <option value='adult'>Adult</option>
            <option value='all'>All</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.checkboxWrapper}>
          <label className={styles.label} htmlFor='isWaitlist'>
            Waitlist?
          </label>
          <input
            checked={isWaitlist}
            onChange={() => setIsWaitlist((current) => !current)}
            className={styles.checkbox}
            type='checkbox'
            id={'isWaitlist'}
          />
        </div>
      </div>
      {isWaitlist && (
        <div className={styles.formRow}>
          <div className={styles.formInputWrapper}>
            <label htmlFor='maxWaitlist'>Max Waitlist</label>
            <input
              placeholder={'Not required.'}
              type='text'
              className={styles.input}
              id={'maxWaitlist'}
            />
          </div>
        </div>
      )}
      <div className={styles.textAreaRow}>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            placeholder={'Tell us about your event!'}
            id='description'
            rows='10'
            maxLength={500}
            className={`${styles.input} ${styles.textAreaInput}`}
            required
          ></textarea>
        </div>
      </div>
      <div>
        <Button buttonStyle={'createEventButton'}>Create Event</Button>
      </div>
    </Form>
  );
}
