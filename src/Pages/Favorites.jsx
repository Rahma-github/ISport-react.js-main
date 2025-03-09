
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { toggleFavorite } from "../store/productStore/productSlice";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.products.favorites);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!user && !storedUser) {
      navigate("/login");
    }
  }, [user, navigate]);

  const totalPrice = useMemo(() => {
    return favorites.reduce((sum, product) => {
      const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0;
      return sum + numericPrice;
    }, 0);
  }, [favorites]);

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-4">
        Your Favorite Products ❤️
      </h2>

   
      <div className="text-center mb-4">
        <h4 className="fw-bold text-success">
          Total Wishlist Price: ${totalPrice}
        </h4>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-muted fs-5">No favorite products!</p>
      ) : (
        <div className="row g-4">
          {favorites.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success fw-bold">
                    ${product.price}
                  </p>

                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(toggleFavorite(product))}
                  >
                    Remove ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
