import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  const { title, img, price, isNew, oldPrice, img2 } = item.attributes;
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {isNew && <span>New Season</span>}
          <img
            src={`${process.env.REACT_APP_UPLOADS_URL}${img.data.attributes.url}`}
            alt=""
            className="mainImg"
          />
          <img
            src={
              img2 &&
              `${process.env.REACT_APP_UPLOADS_URL}${img2.data.attributes.url}`
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{title}</h2>
        <div className="prices">
          <h3>${oldPrice || price + 40}</h3>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
