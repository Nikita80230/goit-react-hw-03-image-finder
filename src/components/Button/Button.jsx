export const Button = ({ onLoadMoreClick }) => {

    return (
        <button onClick={() => { onLoadMoreClick() }}>Load More</button>
    )
}