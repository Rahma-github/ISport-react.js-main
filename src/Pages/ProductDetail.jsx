
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartStore/cartSclice";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <h2 className="text-center text-danger mt-5">Product not found</h2>;

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      dispatch(addToCart(product));
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        navigate("/cart"); 
      }, 1000);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="fw-bold text-success">${product.price}</h4>

          <div className="mt-3">
            <h5 className="mb-2">Available Sizes:</h5>
            {product.sizes?.map((size) => (
              <span
                key={size}
                className={`badge ${
                  product.availableSizes?.includes(size) ? "bg-secondary" : "bg-danger"
                } m-2 px-3 py-2`}
              >
                {size}
              </span>
            ))}
          </div>

          <button
            className="btn btn-success mt-4"
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? "✔ Added" : "🛒 Add to Cart"}
          </button>

          {added && <p className="text-success mt-2 fw-bold">Item added</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
