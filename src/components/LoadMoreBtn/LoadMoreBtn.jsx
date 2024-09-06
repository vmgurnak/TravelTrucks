import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ showMore }) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={showMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
