import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutLinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";
import "./slider.scss";
const Slider = () => {
  const [slide, setSlide] = useState(0);
  const data = [
    "https://c1.wallpaperflare.com/path/659/791/731/one-piece-cosplay-manga-anime-354f38845e7e8c1580178c858578884d.jpg",
    "https://r4.wallpaperflare.com/wallpaper/496/609/203/hatake-kakashi-cosplay-men-mist-wallpaper-0238aa270026841a44781fe11293919b.jpg",
    "https://r4.wallpaperflare.com/wallpaper/49/232/890/women-harley-quinn-suicide-squad-pigtails-actress-hd-wallpaper-e8f6cd9830f0ccf850ac710e6832341a.jpg",
  ];

  const decSlider = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  const incSlider = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${slide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={decSlider}>
          <WestOutLinedIcon />
        </div>
        <div className="icon" onClick={incSlider}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
