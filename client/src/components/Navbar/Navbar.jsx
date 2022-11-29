import "./navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import WishList from "../Wishlist/WishList";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  console.log();
  const [openCart, setOpenCart] = useState(false);
  const [openWish, setOpenWish] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/imgs/usd.png" alt="" width={"30px"} height={"auto"} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/products/1"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/2"}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/3"}>
              Kids
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/4"}>
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Jotaku
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to={""}>
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={""}>
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to={""}>
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to={""}>
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            {openWish ? (
              <FavoriteIcon
                sx={{ color: `${openWish ? "#662FFC" : ""}` }}
                onClick={() => {
                  setOpenWish((prev) => !prev);
                  setOpenCart(false);
                }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => {
                  setOpenWish((prev) => !prev);
                  setOpenCart(false);
                }}
              />
            )}
            <div
              className="cartIcon"
              onClick={() => {
                setOpenCart((prev) => !prev);
                setOpenWish(false);
              }}
            >
              <ShoppingCartOutlinedIcon />
              <span className="">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
      {openWish && <WishList />}
    </div>
  );
};

export default Navbar;
