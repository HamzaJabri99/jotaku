import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
            libero incidunt adipisci corrupti mollitia, inventore autem
            praesentium velit repellendus saepe, debitis fugiat amet. Itaque
            reiciendis provident ducimus qui vitae?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel facere
            officiis, eius sit quae facilis recusandae molestiae quas
            reprehenderit veritatis voluptatum cum quidem suscipit doloremque
            asperiores autem doloribus deleniti incidunt.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">
            <Link className="link" to="/">
              Ｊｏｔａｋｕ
            </Link>
          </div>
          <div className="copyright">
            <span>&copy; Copyright 2023 All Rights Reserved</span>
          </div>
        </div>
        <div className="right">
          <img src="/imgs/secure-stripe-payment-logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
