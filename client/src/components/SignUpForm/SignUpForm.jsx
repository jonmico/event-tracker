import Button from '../Button/Button';

import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Button>HELLO</Button>
    </form>
  );
}
