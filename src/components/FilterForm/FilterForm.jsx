import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import clsx from 'clsx';

import { ICONS } from '../Constants/constants';
import css from './FilterForm.module.css';

const INITIAL_FORM_DATA = {
  location: '',
  AC: '',
  transmission: '',
  kitchen: '',
  tv: '',
  bathroom: '',
  form: '',
};

const handleSubmit = (values, action) => {
  console.log(values);
  action.resetForm();
};

const FilterFormSchema = Yup.object().shape({
  location: Yup.string().min(2, 'Location must be at least 2 characters!'),
});

const FilterForm = () => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <div className={css.filterForm}>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
        validationSchema={FilterFormSchema}
      >
        <Form>
          <label className={css.label}>
            <span className={css.labelText}>Location</span>
            <div className={css.inputWrapper}>
              <Field
                className={css.inputLocation}
                placeholder="Enter city"
                type="text"
                name="location"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></Field>
              <ErrorMessage name="location" component="div" />
              <svg className={css.locationIcon}>
                <use
                  href={isFocus ? ICONS.locationPress : ICONS.location}
                ></use>
              </svg>
            </div>
          </label>
          <p className={css.filterHeadline}>Filters</p>
          <h3 className={css.filterTitle}>Vehicle equipment</h3>
          <ul className={clsx(css.filterWrapper, css.checkboxWrapper)}>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="AC"
                id="AC"
              />
              <label className={clsx(css.filterLabel)} htmlFor="AC">
                <svg className={css.filterIcon}>
                  <use href={ICONS.ac}></use>
                </svg>
                <span className={css.filterText}>AC</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="transmission"
                value="automatic"
                id="automatic"
              />
              <label className={clsx(css.filterLabel)} htmlFor="automatic">
                <svg className={css.filterIcon}>
                  <use href={ICONS.transmission}></use>
                </svg>
                <span className={css.filterText}>Automatic</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="kitchen"
                id="kitchen"
              />
              <label className={clsx(css.filterLabel)} htmlFor="kitchen">
                <svg className={css.filterIcon}>
                  <use href={ICONS.kitchen}></use>
                </svg>
                <span className={css.filterText}>Kitchen</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="tv"
                id="tv"
              />
              <label className={clsx(css.filterLabel)} htmlFor="tv">
                <svg className={css.filterIcon}>
                  <use href={ICONS.tv}></use>
                </svg>
                <span className={css.filterText}>TV</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="bathroom"
                id="bathroom"
              />
              <label className={clsx(css.filterLabel)} htmlFor="bathroom">
                <svg className={css.filterIcon}>
                  <use href={ICONS.bathroom}></use>
                </svg>
                <span className={css.filterText}>Bathroom</span>
              </label>
            </li>
          </ul>

          <h3 className={css.filterTitle}>Vehicle type</h3>
          <ul className={clsx(css.filterWrapper, css.radioWrapper)}>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="radio"
                name="form"
                value="panelTruck"
                id="panelTruck"
              />
              <label className={clsx(css.filterLabel)} htmlFor="panelTruck">
                <svg className={css.filterIcon}>
                  <use href={ICONS.formVan}></use>
                </svg>
                <span className={css.filterText}>Van</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="radio"
                name="form"
                value="fullyIntegrated"
                id="fullyIntegrated"
              />
              <label
                className={clsx(css.filterLabel)}
                htmlFor="fullyIntegrated"
              >
                <svg className={css.filterIcon}>
                  <use href={ICONS.formFullyIntegrated}></use>
                </svg>
                <span className={css.filterText}>Fully Integrated</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="radio"
                name="form"
                value="alcove"
                id="alcove"
              />
              <label className={clsx(css.filterLabel)} htmlFor="alcove">
                <svg className={css.filterIcon}>
                  <use href={ICONS.formAlcove}></use>
                </svg>
                <span className={css.filterText}>Alcove</span>
              </label>
            </li>
          </ul>

          <button type="submit" className={css.btnSearch}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterForm;
