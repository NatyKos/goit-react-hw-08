import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import Loader from '../Loader/Loader';
// import Error from '../Error/Error';
// import css from './App.module.css';
// import { selectLoading } from '../../redux/contactsSlice';
// import { selectError } from '../../redux/contactsSlice';
// import { fetchContacts } from '../../redux/contactsOps';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);
//   const isError = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1 className={css.title}>Phonebook</h1>
//       {isLoading && <Loader />}
//       {isError && <Error />}
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// }
