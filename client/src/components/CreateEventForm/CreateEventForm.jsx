// TODO: Implement this form. Use placeholder ID for each event so we can
// filter by author.

import { useState } from 'react';
import FormTextInput from '../FormTextInput/FormTextInput';
import styles from './CreateEventForm.module.css';

export default function CreateEventForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  return (
    <form className={styles.createEventForm}>
      <h1 className={styles.title}>Create Event</h1>
      <FormTextInput
        forId={'name'}
        label={'Name'}
        state={name}
        setState={setName}
        error={nameError}
        setError={setNameError}
      />
    </form>
  );
}
