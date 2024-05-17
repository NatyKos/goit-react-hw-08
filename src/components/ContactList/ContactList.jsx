import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const filter = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filter.map(contact => (
        <li key={contact.id}>
          <Contact contactItem={contact} />
        </li>
      ))}
    </ul>
  );
}
