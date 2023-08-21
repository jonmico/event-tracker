import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        Just for fun. Check out the repository{' '}
        <a
          className={styles.link}
          href={'https://github.com/jonmico/event-tracker'}
        >
          here.
        </a>
      </footer>
    </div>
  );
}
