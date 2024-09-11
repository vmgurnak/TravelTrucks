import { useSelector } from 'react-redux';

import { selectCamper } from '../../redux/campers/selectors';
import { SvgIcon } from '../REUSABLE/SvgIcon/SvgIcon';
import { ICONS } from '../Constants/constants';

import css from './CamperReviews.module.css';

const CamperReviews = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.camperReviews}>
      <ul className={css.reviewList}>
        {camper.reviews.map((review, index) => (
          <li className={css.reviewItem} key={index}>
            <div className={css.reviewWrap}>
              <div className={css.reviewLetter}>
                {review.reviewer_name.charAt(0)}
              </div>
              <div>
                <h4 className={css.reviewName}>{review.reviewer_name}</h4>
                <div className={css.reviewRaiting}>
                  {Array(review.reviewer_rating)
                    .fill(0)
                    .map((_, index) => (
                      <SvgIcon
                        addClass={css.reviewIcon}
                        key={index}
                        icon={ICONS.starPressed}
                      />
                    ))}
                  {Array(5 - review.reviewer_rating)
                    .fill(0)
                    .map((_, index) => (
                      <SvgIcon
                        addClass={css.reviewIcon}
                        key={index}
                        icon={ICONS.star}
                      />
                    ))}
                </div>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
