import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" />
          <img src={item?.img2} alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
