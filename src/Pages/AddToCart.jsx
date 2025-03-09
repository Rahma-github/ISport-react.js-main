// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart } from "../store/cartStore/cartSclice";
// import { useNavigate } from "react-router-dom";

// const AddToCart = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center text-danger fw-bold">Your Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-muted fs-5">Your cart is empty!</p>
//       ) : (
//         <div>
//           <div className="row g-4">
//             {cartItems.map((item) => (
//               <div key={item.id} className="col-md-4">
//                 <div className="card shadow-sm">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="card-img-top"
//                     style={{ height: "250px", objectFit: "cover" }}
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{item.title}</h5>
//                     <p className="text-success fw-bold">{item.price}</p>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => dispatch(removeFromCart(item.id))}
//                     >
//                       ❌ Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-4">
//           <button
//               className="btn btn-success px-4 py-2 mt-2"
//               onClick={() => navigate("/payment")}
//             >
//               Proceed to Checkout
//             </button>          </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToCart;
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../store/cartStore/cartSclice";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price for all products
  const totalPrice = cartItems.reduce((acc, item) => {
    const formattedPrice = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
    return acc + formattedPrice * item.quantity;
  }, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger fw-bold">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is empty!</p>
      ) : (
        <div>
          <div className="row g-4">
            {cartItems.map((item) => {
              // Convert price to number (remove "EGP" and commas)
              const formattedPrice = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;

              return (
                <div key={item.id} className="col-md-4">
                  <div className="card shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="text-success fw-bold">
                        EGP {(formattedPrice * item.quantity).toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          ➖
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          ➕
                        </button>
                      </div>

                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Price Section */}
          <div className="text-center mt-4">
            <h4 className="fw-bold text-success">
              Total: EGP {totalPrice.toFixed(2)}
            </h4>

            <button
              className="btn btn-success px-4 py-2 mt-2"
              onClick={() => navigate("/payment")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
