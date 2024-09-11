import { useSelector } from 'react-redux';

import { selectCamper } from '../../redux/campers/selectors';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';

import css from './CamperReviews.module.css';

const CamperReviews = () => {
  const camper = useSelector(selectCamper);

  // const raiting = Array(5).fill(0);

  return (
    <div className={css.camperReviews}>
      <ul>
        {camper.reviews.map((review, index) => (
          <li className={css.reviewItem} key={index}>
            <div className={css.reviewLetter}>
              {review.reviewer_name.charAt(0)}
            </div>
            <h4>{review.reviewer_name}</h4>
            {Array(review.reviewer_rating)
              .fill(0)
              .map((_, index) => (
                <SvgIcon
                  addClass={css.reviewIcon}
                  key={index}
                  icon={ICONS.star}
                />
              ))}

            <div>{review.reviewer_rating}</div>
            {/* <SvgIcon addClass={css.reviewIcon} icon={ICONS.star} /> */}
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
