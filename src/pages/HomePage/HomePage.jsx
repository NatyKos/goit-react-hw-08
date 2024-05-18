import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homeText}>
      <p className={css.header}>Welcome {''}</p>
      <p>
        This application was created to help you save your contacts and keep
        them always at hand.{' '}
      </p>
      <p>
        Try it - it is easy! You can create your own account and store your
        contacts in a safe place.
      </p>
    </div>
  );
}
