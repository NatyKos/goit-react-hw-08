import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

// VALIDATION
const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Is required!').trim(),
  password: Yup.string()
    .required('Please provide a valid password')
    .min(6, 'Min 6 chars!')
    .required('Is required!'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('Welcome back!'))
      .catch(() => toast.error('User not found, try again!'));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password{' '}
          <Field className={css.field} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
