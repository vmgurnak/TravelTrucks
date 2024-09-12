import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import css from './CamperBookForm.module.css';

const BookFormShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters!')
    .max(50, 'Name must be less than 50 characters!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
  bookingDate: Yup.date().required('Booking date is required!'),
  comment: Yup.string()
    .min(3, 'Comment must be at least 3 characters!')
    .max(256, 'Comment must be less than 50 characters!'),
});

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const CamperBookForm = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <div className={css.camperBookForm}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={BookFormShema}
      >
        <Form>
          <label className={css.label}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder="Name*"
            ></Field>
            <ErrorMessage className={css.error} name="name" component="div" />
          </label>
          <label className={css.label}>
            <Field
              className={css.input}
              name="email"
              type="email"
              placeholder="Email*"
            ></Field>
          </label>
          <label className={css.label}>
            <Field
              className={css.input}
              name="bookingDate"
              type="date"
              placeholder="Booking date*"
            ></Field>
          </label>
          <label className={css.label}>
            <Field
              className={css.input}
              name="comment"
              as="textarea"
              placeholder="Comment"
            ></Field>
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperBookForm;
