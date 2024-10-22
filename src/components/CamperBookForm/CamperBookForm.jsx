import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { selectCamper } from '../../redux/campers/selectors';

import css from './CamperBookForm.module.css';

const BookFormShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters!')
    .max(50, 'Name must be less than 50 characters!')
    .required('Name is required!'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
  bookingDate: Yup.date().required('Date is required!'),
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
  const [startDate, setStartDate] = useState(null);
  const camper = useSelector(selectCamper);
  const handleSubmit = (values, action) => {
    action.resetForm();
    setStartDate(null);
    toast.success('Your booking request has been successfully sent');
    setTimeout(() => {
      toast.success(
        `Camper ${camper.name} for ${
          values.name
        } booked on ${values.bookingDate.toLocaleDateString()}. Thank you!`
      );
    }, 7000);
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
        {({ setFieldValue }) => (
          <Form noValidate autoComplete="on">
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
              <ErrorMessage
                className={css.error}
                name="email"
                component="div"
              />
            </label>
            <label className={css.label}>
              <DatePicker
                className={css.input}
                selected={startDate}
                onChange={(date, event) => {
                  setStartDate(date);
                  setFieldValue('bookingDate', date);
                  event.preventDefault();
                }}
                minDate={new Date()}
                toggleCalendarOnIconClick
                // closeOnScroll={true}
                shouldCloseOnSelect={true}
                placeholderText="Booking date*"
                dateFormat="dd.MM.yyyy"
                onFocus={() => setStartDate(startDate)}
              />
              <ErrorMessage
                className={css.error}
                name="bookingDate"
                component="div"
              />
            </label>
            <label className={css.label}>
              <Field
                className={css.input}
                name="comment"
                as="textarea"
                placeholder="Comment"
              ></Field>
            </label>
            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            border: '2px solid #dadde1',
            padding: '10px',
            color: '#101828',
          },
        }}
      />
    </div>
  );
};

export default CamperBookForm;
