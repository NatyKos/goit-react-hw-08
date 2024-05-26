import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

// VALIDATION
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 chars!')
    .required('Is required!')
    .max(30, 'Max 30 chars!')
    .trim(),
  email: Yup.string().email('Invalid email').required('Is required!').trim(),
  password: Yup.string()
    .required('Please provide a valid password')
    .min(7, 'Min 7 chars!')
    .required('Is required!'),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() =>
        toast.success('Congratulations, you have successfully registered!')
      )
      .catch(() => toast.error('Something went wrong, please try again!'));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
