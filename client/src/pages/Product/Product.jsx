import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartReducer";
import { addToWish, removeFromWish } from "../../redux/wishReducer";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const [selectedImg, setImg] = useState("img");
  const dispatch = useDispatch();
  const prodId = useParams().id;
  const { data, loading, error } = useFetch(`products/${prodId}?populate=*`);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(false);
  const favorites = useSelector((state) => state.wish.favorites);
  const favorite = favorites.find((product) => product.id === data?.id);
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
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                description: data.attributes.description,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon /> Add to cart
        </button>
        <div className="links">
          {favorite ? (
            <div
              className="item"
              onClick={() => dispatch(removeFromWish({ id: favorite.id }))}
            >
              <FavoriteIcon /> Remove From wish list
            </div>
          ) : (
            <div
              className="item"
              onClick={() =>
                dispatch(
                  addToWish({
                    id: data.id,
                    title: data.attributes.title,
                    description: data.attributes.description,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <FavoriteBorderIcon /> Add to wish list
            </div>
          )}
          <div className="item">
            <BalanceIcon />
            <span>Add to compare</span>
          </div>
        </div>
        <div className="info">
          <span>Vendor: Jotaku</span>
          <span>
            Product Type:
            {data?.attributes?.categories?.data?.map((item) => (
              <span key={item.id}> {item?.attributes?.title} </span>
            ))}
            ,
            {data?.attributes?.sub_categories?.data.length > 0
              ? data?.attributes?.sub_categories?.data?.map((item) => (
                  <span key={item.id}> {item?.attributes?.title} </span>
                ))
              : "full Cosplay"}
          </span>
          <span>
            Tag:
            {data?.attributes?.categories?.data?.map((item) => (
              <span key={item.id}> {item?.attributes?.title}</span>
            ))}
          </span>
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
