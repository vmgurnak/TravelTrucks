import { useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';
import { filters } from '../../redux/filters/slice';

import css from './FilterForm.module.css';

const INITIAL_FORM_DATA = {
  location: '',
  AC: '',
  transmission: '',
  kitchen: '',
  TV: '',
  bathroom: '',
  form: '',
};

const FilterFormSchema = Yup.object().shape({
  location: Yup.string().min(2, 'Location must be at least 2 characters!'),
});

const FilterForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleSubmit = (values, action) => {
    dispatch(filters(values));
    console.log(values);
    action.resetForm();
  };

  return (
    <div className={css.filterForm}>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
        validationSchema={FilterFormSchema}
      >
        <Form>
          <label className={css.labelLocation}>
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
              <SvgIcon
                addClass={css.locationIcon}
                icon={isFocus ? ICONS.locationPress : ICONS.location}
              />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.ac} />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.transmission} />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.kitchen} />
                <span className={css.filterText}>Kitchen</span>
              </label>
            </li>
            <li className={css.filterItem}>
              <Field
                className={css.filterInput}
                type="checkbox"
                name="TV"
                id="tv"
              />
              <label className={clsx(css.filterLabel)} htmlFor="tv">
                <SvgIcon addClass={css.filterIcon} icon={ICONS.tv} />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.bathroom} />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.formVan} />
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
                <SvgIcon
                  addClass={css.filterIcon}
                  icon={ICONS.formFullyIntegrated}
                />
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
                <SvgIcon addClass={css.filterIcon} icon={ICONS.formAlcove} />
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
