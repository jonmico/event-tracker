import { useState } from 'react';

import Button from '../Button/Button';

import styles from './SignUpForm.module.css';
import FormTextInput from '../FormTextInput/FormTextInput';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('clicked submit!');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <FormTextInput
        label={'First Name'}
        state={firstName}
        setState={setFirstName}
        error={firstNameError}
        setError={setFirstNameError}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  );
}
