import "./wishlist.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWish, resetWish } from "../../redux/wishReducer";
import { addToCart } from "../../redux/cartReducer";

const WishList = () => {
  const products = useSelector((state) => state.wish.favorites);
  const dispatch = useDispatch();
  console.log(products);
  const total = () => {
    let total = 0;
    products.map((product) => (total += product?.price * product?.quantity));
    return total.toFixed(2);
  };

  return (
    <div className="wishlist">
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
            onClick={() => dispatch(removeFromWish({ id: item.id }))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${total()}</span>
      </div>

      <span className="reset" onClick={() => dispatch(resetWish())}>
        Reset Wishlist
      </span>
    </div>
  );
};

export default WishList;
