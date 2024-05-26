import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.name}</p>
      <button className={css.btnLogout} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
