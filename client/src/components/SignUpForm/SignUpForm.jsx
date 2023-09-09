import { useState } from 'react';

import Button from '../Button/Button';
import FormTextInput from '../FormTextInput/FormTextInput';

import styles from './SignUpForm.module.css';

// TODO: Move this whole form over to vanilla form and use an action.

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [organization, setOrganization] = useState('');

  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (submitError) setSubmitError('');

    if (!firstName) setFirstNameError('Required field.');

    if (!lastName) setLastNameError('Required field.');

    if (!email) setEmailError('Required field.');

    if (!password) setPasswordError('Required field');

    if (!phone) setPhoneError('Required field.');

    if (!firstName || !lastName || !email || !phone || !password) return;

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      phone,
      organization: organization ? organization : undefined,
    };

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error(`Oops! Request failed with status code: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      if (organization) setOrganization('');
    } catch (err) {
      setSubmitError(err.message);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Create an account</h1>
      {submitError && <p className={styles.error}>{submitError}</p>}
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
        forId={'password'}
        label={'Password'}
        state={password}
        setState={setPassword}
        error={passwordError}
        setError={setPasswordError}
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
