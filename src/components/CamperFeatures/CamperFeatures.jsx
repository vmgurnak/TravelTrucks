import { useSelector } from 'react-redux';

import { selectCamper } from '../../redux/campers/selectors';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';

import css from './CamperFeatures.module.css';

const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.camperFeatures}>
      <ul className={css.equipmentList}>
        <li className={css.equipmentItem}>
          <SvgIcon addClass={css.equipmentIcon} icon={ICONS.transmission} />
          <p className={css.equipmentText}>{camper.transmission}</p>
        </li>
        <li className={css.equipmentItem}>
          <SvgIcon addClass={css.equipmentIcon} icon={ICONS.engine} />
          <p className={css.equipmentText}>{camper.engine}</p>
        </li>
        {camper.kitchen && (
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.kitchen} />
            <p className={css.equipmentText}>Kitchen</p>
          </li>
        )}
        {camper.AC && (
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.ac} />
            <p className={css.equipmentText}>AC</p>
          </li>
        )}
        {camper.bathroom && (
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.bathroom} />
            <p className={css.equipmentText}>Bathroom</p>
          </li>
        )}
        {camper.TV && (
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.tv} />
            <p className={css.equipmentText}>TV</p>
          </li>
        )}
        {camper.radio && (
          <li className={css.equipmentItem}>
            <SvgIcon addClass={css.equipmentIcon} icon={ICONS.radio} />
            <p className={css.equipmentText}>Radio</p>
          </li>
        )}
      </ul>
      <div className={css.parameters}>
        <h3 className={css.parametersTitle}>Vehicle details</h3>
        <ul className={css.parametersList}>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Form</span>
            <span className={css.itemValue}>{camper.form}</span>
          </li>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Length</span>
            <span className={css.itemValue}>{camper.length}</span>
          </li>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Width</span>
            <span className={css.itemValue}>{camper.width}</span>
          </li>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Height</span>
            <span className={css.itemValue}>{camper.height}</span>
          </li>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Tank</span>
            <span className={css.itemValue}>{camper.tank}</span>
          </li>
          <li className={css.parametersItem}>
            <span className={css.itemName}>Consumption</span>
            <span className={css.itemValue}>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
