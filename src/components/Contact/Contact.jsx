import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function Contact({ contactItem: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactCard}>
      <div>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>

      <button
        type="button"
        className={css.btnDelete}
        onClick={() =>
          dispatch(deleteContact(id))
            .unwrap()
            .then(() => toast.success('Contact deleted successfully!'))
        }
      >
        Delete
      </button>
    </div>
  );
}
