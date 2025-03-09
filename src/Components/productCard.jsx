/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product, toggleFavorite }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => toggleFavorite(product.id)}>
        {product.isFavorite ? "Remove from Favorite" : "Add to Favorite"}
      </button>
      <Link to={`/details/${product.id}`}>View Details</Link>
    </div>
  );
};


export default ProductCard;
