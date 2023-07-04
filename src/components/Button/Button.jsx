import css from './Button.module.css'

export const Button = ({ onLoadMoreClick }) => {
    return (
        <button className={css.loadMoreBtn}
            onClick={() => {
                onLoadMoreClick();
            }}
        >
            Load More
        </button>
    );
};
