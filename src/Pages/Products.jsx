// import { useContext } from "react";
// import { ProductContext } from "../context/ProductContext";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// const Products = () => {
//   const { products, toggleFavorite, favorites } = useContext(ProductContext);

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="card-img-top"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="fw-bold text-primary">${product.price}</p>

//                 <button
//                   className={`btn me-2 ${
//                     favorites.some((fav) => fav.id === product.id)
//                       ? "btn-danger"
//                       : "btn-outline-danger"
//                   }`}
//                   onClick={() => toggleFavorite(product)}
//                 >
//                   {favorites.some((fav) => fav.id === product.id)
//                     ? "Remove ❤️"
//                     : "Add ❤️"}
//                 </button>

//                 <Link to={`/details/${product.id}`} className="btn btn-outline-primary">
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, toggleFavorite } from "../store/productStore/productSlice";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = () => {
  const dispatch = useDispatch();
  const { items: products, favorites, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p className="text-center mt-4">Loading...</p>;
  if (status === "failed") return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="text-center my-4">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="fw-bold text-success">${product.price}</p>

                <button
                  className={`btn me-2 ${
                    favorites.some((fav) => fav.id === product.id) ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => dispatch(toggleFavorite(product))}
                >
                  {favorites.some((fav) => fav.id === product.id) ? "Remove ❤️" : "Add ❤️"}
                </button>

                <Link to={`/details/${product.id}`} className="btn btn-outline-success">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
