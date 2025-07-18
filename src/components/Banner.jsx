import { useEffect, useState } from "react";
import bannerImg from "../assets/images/mainBanner.jpg";

function Banner({ title = "Default Title", subtitle = "Default subtitle" }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner">
      <img
        src={bannerImg}
        alt="Banner"
        className="banner-img"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />

      <div className="banner-overlay"></div>

      <div
        className="banner-text"
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <svg
        className="banner-slope"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#fff" points="0,100 100,0 100,100" />
      </svg>
    </div>
  );
}

export default Banner;
