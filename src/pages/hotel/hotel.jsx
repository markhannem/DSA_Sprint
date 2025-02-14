import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import Mail from "../../components/mail/Mail";
import Footer from "../../components/footer/footer";

const Hotel = () => {
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const eventOpen = (i) => {
    setSlideNum(i);
    setOpen(true);
  };

  const eventMove = (direction) => {
    let newSlideNum;

    if (direction === "l") {
      newSlideNum = slideNum === 0 ? 5 : slideNum - 1;
    } else {
      newSlideNum = slideNum === 5 ? 0 : slideNum + 1;
    }

    setSlideNum(newSlideNum);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => eventMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNum].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => eventMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now!</button>
          <h1 className="hotelTitle">Holiday Inn</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>123 Water Street St.John's</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => eventOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                At the center of St.John's downtown scenery and active
                lifestyle. Street Apartments has accommodations with air
                conditioning and free WiFi. The units come with hardwood floors
                and feature a fully equipped kitchenette with a microwave, a
                flat-screen TV, and a private bathroom with shower and a
                hairdryer. A fridge is also offered, as well as an electric tea
                pot and a coffee machine. Popular points of interest near the
                apartment include George Street and Many Shops.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a weekend stay!</h1>
              <span>
                Located in the real heart of St.John's, this stay has an
                excellent location score of 8.9!
              </span>
              <h2>
                <b>$245</b> (2 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
