import AppBar from '../AppBar/AppBar';
// import Loader from '../Loader/Loader';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
