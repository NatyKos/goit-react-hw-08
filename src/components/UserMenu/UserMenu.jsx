import css from './UserMenu.module.css';

export default function UserMenu() {
  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, user</p>
      <button type="button">Logout</button>
    </div>
  );
}
