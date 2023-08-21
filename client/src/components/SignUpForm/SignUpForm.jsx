import { useState } from 'react';

import Button from '../Button/Button';

import styles from './SignUpForm.module.css';
import FormTextInput from '../FormTextInput/FormTextInput';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [organization, setOrganization] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!firstName) setFirstNameError('Required field.');

    if (!lastName) setLastNameError('Required field.');

    if (!email) setEmailError('Required field.');

    if (!phone) setPhoneError('Required field.');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      <FormTextInput
        forId={'firstName'}
        label={'First Name'}
        state={firstName}
        setState={setFirstName}
        error={firstNameError}
        setError={setFirstNameError}
      />
      <FormTextInput
        forId={'lastName'}
        label={'Last Name'}
        state={lastName}
        setState={setLastName}
        error={lastNameError}
        setError={setLastNameError}
      />
      <FormTextInput
        forId={'email'}
        label={'Email'}
        state={email}
        setState={setEmail}
        error={emailError}
        setError={setEmailError}
      />
      <FormTextInput
        forId={'phone'}
        label={'Phone Number'}
        state={phone}
        setState={setPhone}
        error={phoneError}
        setError={setPhoneError}
      />
      <FormTextInput
        forId={'organization'}
        label={'Organization'}
        state={organization}
        setState={setOrganization}
      />
      <Button buttonStyle={'submitButton'} type={'submit'}>
        Submit
      </Button>
    </form>
  );
}
