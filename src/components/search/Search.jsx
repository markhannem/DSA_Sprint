import "./Search.css";

const Search = () => {
  return (
    <div className="srchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="srchImg"
      />
      <div className="srchDesc">
        <h1 className="srchTitle">Tower Street Apartments</h1>
        <span className="srchDis">500m from Avalon Mall</span>
        <span className="srchSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="srchFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="srchCancel">Free cancellation </span>
        <span className="srchCancel2">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="srchDetails">
        <div className="srchRating">
          <span>Excellent</span>
          <button>8.7</button>
        </div>
        <div className="srchText">
          <span className="srchPrice">$123</span>
          <span className="srchTax">Includes all taxes and fees</span>
          <button className="srchCheck">See Availability</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
