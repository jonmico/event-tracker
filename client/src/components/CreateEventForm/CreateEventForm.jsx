// TODO: Implement this form. Use placeholder ID for each event so we can
// filter by author.

import { useState } from 'react';

import Button from '../Button/Button';

import styles from './CreateEventForm.module.css';

export default function CreateEventForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');

  const [time, setTime] = useState('');
  const [timeError, setTimeError] = useState('');

  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');

  const [maxAttendees, setMaxAttendees] = useState('');

  const [keywords, setKeywords] = useState('');
  const [keywordsError, setKeywordsError] = useState('');

  const [isWaitlist, setIsWaitlist] = useState(false);

  const [maxWaitlist, setMaxWaitlist] = useState('');

  function clearError(stateFn) {
    stateFn('');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!name) setNameError('Required field.');

    if (!date) setDateError('Required field.');

    if (!time) setTimeError('Required field.');

    if (!keywords) setKeywordsError('Required field.');

    if (!location) setLocationError('Required field.');

    if (keywords === 'all') {
      setKeywords(['children', 'teen', 'adult']);
    }

    const newEvent = {
      name,
      date,
      time,
      location,
      maxAttendees,
      keywords,
      isWaitlist,
      maxWaitlist,
    };

    console.log(newEvent);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.createEventForm}>
      <h1 className={styles.title}>Create Event</h1>
      <div className={styles.formRow}>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='name'>
            Event Name
          </label>
          <input
            value={name}
            onChange={(evt) => {
              if (nameError) clearError(setNameError);
              setName(evt.target.value);
            }}
            className={`${styles.input} ${nameError ? styles.inputError : ''}`}
            type='text'
            id={'name'}
          />
          {nameError && <p className={styles.error}>{nameError}</p>}
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='date'>
            Date
          </label>
          <input
            value={date}
            onChange={(evt) => {
              if (dateError) clearError(setDateError);
              setDate(evt.target.value);
            }}
            className={`${styles.input} ${dateError ? styles.inputError : ''}`}
            type='date'
            id={'date`'}
          />
          {dateError && <p className={styles.error}>{dateError}</p>}
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='time'>
            Time
          </label>
          <input
            value={time}
            onChange={(evt) => {
              if (timeError) clearError(setTimeError);
              setTime(evt.target.value);
            }}
            className={`${styles.input} ${timeError ? styles.inputError : ''}`}
            type='time'
            id={'time'}
          />
          {timeError && <p className={styles.error}>{timeError}</p>}
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formInputWrapper}>
          <label htmlFor='location' className={styles.label}>
            Location
          </label>
          <input
            value={location}
            onChange={(evt) => {
              if (locationError) clearError(setLocationError);
              setLocation(evt.target.value);
            }}
            type='text'
            className={`${styles.input} ${
              locationError ? styles.inputError : ''
            }`}
          />
          {locationError && <p className={styles.error}>{locationError}</p>}
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='maxAttending'>
            Max Attendees
          </label>
          <input
            placeholder={40}
            value={maxAttendees}
            onChange={(evt) => setMaxAttendees(evt.target.value)}
            className={styles.input}
            type='text'
            id={'maxAttending'}
          />
        </div>
        <div className={styles.formInputWrapper}>
          <label className={styles.label} htmlFor='keywords'>
            Keywords
          </label>
          <select
            value={keywords}
            onChange={(evt) => {
              if (keywordsError) clearError(setKeywordsError);
              setKeywords(evt.target.value);
            }}
            className={`${styles.input} ${
              keywordsError ? styles.inputError : ''
            }`}
            id='keywords'
          >
            <option value=''>Select</option>
            <option value='children'>Children</option>
            <option value='teen'>Teen</option>
            <option value='adult'>Adult</option>
            <option value='all'>All</option>
          </select>
          {keywordsError && <p className={styles.error}>{keywordsError}</p>}
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
              value={maxWaitlist}
              onChange={(evt) => setMaxWaitlist(evt.target.value)}
              type='text'
              className={styles.input}
              id={'maxWaitlist'}
            />
          </div>
        </div>
      )}
      <div>
        <Button buttonStyle={'createEventButton'}>Create Event</Button>
      </div>
    </form>
  );
}
