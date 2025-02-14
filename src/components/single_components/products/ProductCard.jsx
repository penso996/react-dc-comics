// ProductCard.jsx
export default function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.comic.thumb} alt={props.comic.series} />
            <h4>{props.comic.series}</h4>
        </div>
    );
}