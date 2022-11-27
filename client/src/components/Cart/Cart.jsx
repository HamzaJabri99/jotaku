import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facilis excepturi quasi repellat mollitia maiores esse recusandae consequuntur quidem, dolores minus quaerat aut, fugiat aliquid nostrum asperiores laudantium eveniet atque?",
      oldPrice: 300,
      price: 200,
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facilis excepturi quasi repellat mollitia maiores esse recusandae consequuntur quidem, dolores minus quaerat aut, fugiat aliquid nostrum asperiores laudantium eveniet atque?",
      oldPrice: 300,
      price: 200,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 50)}</p>
            <div className="price">2 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$200</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
