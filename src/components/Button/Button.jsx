export const Button = ({ onLoadMoreClick }) => {
    const onHandleClick = () => {
        onLoadMoreClick();
    }
    return (
        <button onClick={onHandleClick}>Load More</button>
    )
}