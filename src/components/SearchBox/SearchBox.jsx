import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.search}>
      <p>
        Find contacts
        <input
          className={css.searchInput}
          type="text"
          value={filter}
          onChange={event => {
            dispatch(changeFilter(event.target.value));
          }}
        />
      </p>
    </div>
  );
}
