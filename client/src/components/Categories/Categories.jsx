import "./categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://m.media-amazon.com/images/I/619Ck71Lg6S._AC_UX569_.jpg"
            alt=""
          />
          <button>
            <Link to={"products/1"} className="link">
              Kids
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="https://wallpapercave.com/wp/wp5127452.jpg" alt="" />
          <button>
            <Link to={"products/1"} className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="https://wallpapercave.com/wp/wp5109301.jpg" alt="" />
          <button>
            <Link to={"products/1"} className="link">
              Anime
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/1e8359ac5aaac285fdce967b8e0e4c6d.jpg"
                alt=""
              />
              <button>
                <Link to={"products/1"} className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/f0e3d6ecd627c6399334ce944f0edb89.jpg"
                alt=""
                srcset=""
              />
              <button>
                <Link to={"products/1"} className="link">
                  Mixed
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="https://wallpapercave.com/wp/wp7578969.jpg"
              alt=""
              srcset=""
            />
            <button>
              <Link to={"products/1"} className="link">
                Elegant
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
