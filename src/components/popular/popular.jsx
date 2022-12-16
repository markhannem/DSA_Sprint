import "./popular.css";
import htl1 from "./imgs/htl1.png";

const Popular = () => {
  return (
    <div className="popular">
      <div className="pItem">
        <img src={htl1} alt="" className="pImg" />
        <span className="pName">Sheraton Hotels</span>
        <span className="pCity">St.John's</span>
        <span className="pPrice">Starting from $100</span>
        <div className="pRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="pItem">
        <img src={htl1} alt="" className="pImg" />
        <span className="pName">Comfort Suites Airport</span>
        <span className="pCity">Austin</span>
        <span className="pPrice">Starting from $140</span>
        <div className="pRating">
          <button>8.7</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="pItem">
        <img src={htl1} alt="" className="pImg" />
        <span className="pName">Four Seasons Hotel</span>
        <span className="pCity">Lisbon</span>
        <span className="pPrice">Starting from $99</span>
        <div className="pRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="pItem">
        <img src={htl1} alt="" className="pImg" />
        <span className="pName">Hilton Garden Inn</span>
        <span className="pCity">Berlin</span>
        <span className="pPrice">Starting from $105</span>
        <div className="pRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default Popular;
