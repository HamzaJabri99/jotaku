import "./navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
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
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/2"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/3"}>
              Children
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
            <FavoriteBorderIcon />
            <div
              className="cartIcon"
              onClick={() => setOpenCart((prev) => !prev)}
            >
              <ShoppingCartOutlinedIcon />
              <span className="">0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
