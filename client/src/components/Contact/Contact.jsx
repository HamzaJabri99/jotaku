import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Contact Us</span>
        <div className="mail">
          <input type="text" placeholder="enter your e-mail..." />
          <button>Join us</button>
        </div>
        <div className="icons">
          <Link to="#" className="link">
            <FacebookIcon />
          </Link>
          <Link to="#" className="link">
            <InstagramIcon />
          </Link>
          <Link to="#" className="link">
            <TwitterIcon />
          </Link>
          <Link to="#" className="link">
            <GoogleIcon />
          </Link>
          <Link to="#" className="link">
            <PinterestIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
