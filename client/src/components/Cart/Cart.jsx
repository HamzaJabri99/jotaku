import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import makeRequest from "../../makeRequest";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    products.map((product) => (total += product?.price * product?.quantity));
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51M9XSBGogcCZVVw2eAYas6fFqi1nVHfuL8SyLq5lls8NYRlviRLAq2JDOrp8QkPwPZd9PN4WU007Zm5MxcDH5VrC00QuIboNbk"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const resp = await makeRequest.post("/orders", { products });
      await stripe.redirectToCheckout({
        sessionId: resp.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item?.id}>
          <img
            src={`${process.env.REACT_APP_UPLOADS_URL}${item?.img}`}
            alt=""
          />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.description.substring(0, 50)}</p>
            <div className="price">
              {item.quantity} x ${item?.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
            onClick={() => dispatch(removeFromCart({ id: item?.id }))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
