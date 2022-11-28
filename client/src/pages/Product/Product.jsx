import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Product = () => {
  // const images = [
  //   "https://tokyofashion.com/wp-content/uploads/2022/03/2021-06-06-024-003-Harajuku-NK-DZ7-0029.jpg",
  //   "https://tokyofashion.com/wp-content/uploads/2022/03/2021-06-06-024-006-Harajuku-NK-DZ7-0054.jpg",
  // ];
  const [selectedImg, setImg] = useState("img");

  const prodId = useParams().id;
  const { data, loading, error } = useFetch(`products/${prodId}?populate=*`);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(false);

  return (
    <div className="product">
      <div className="left">
        <div className="imgs">
          <img
            src={`${process.env.REACT_APP_UPLOADS_URL}${data?.attributes?.img?.data?.attributes.url}`}
            alt=""
            onClick={() => setImg("img")}
          />
          <img
            src={`${process.env.REACT_APP_UPLOADS_URL}${data?.attributes?.img2?.data?.attributes.url}`}
            alt=""
            onClick={() => setImg("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={`${process.env.REACT_APP_UPLOADS_URL}${data?.attributes[selectedImg]?.data?.attributes.url}`}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">${data?.attributes?.price}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
          cupiditate? Amet esse quae, explicabo adipisci ullam facere nam
          assumenda vero enim in sed illo laudantium animi neque molestias.
          Quisquam, magnam!
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add to cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Add to wish list
          </div>
          <div className="item">
            <BalanceIcon />
            <span>Add to compare</span>
          </div>
        </div>
        <div className="info">
          <span>Vendor: JapanExpo</span>
          <span>Product Type: Skirt</span>
          <span>Tag: Skirt, Women, Kids</span>
        </div>
        <hr />
        <div className="details">
          <span onClick={() => setDescription((prev) => !prev)}>
            DESCRIPTION
          </span>
          {description && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio fugiat minus, explicabo ducimus quia iure
              sint quasi obcaecati modi laudantium eaque recusandae quo.
              Accusamus iste eveniet voluptates impedit atque?
            </p>
          )}
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
