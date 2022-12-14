import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faCheck,
  faCalendarDay,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCheck} />
            <span>Must Do's</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi's</span>
          </div>
        </div>
        <h1 className="headerTitle"> Who need's an excuse for a vacation?</h1>
        <p className="headerDesc"> Save 10% on your first booking!</p>
        <button className="headerBtn">SIGN UP/LOGIN</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />{" "}
            <input
              type="text"
              placeholder="Destination"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
            <span className="headerSearchText"> Date to Date</span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">
              {" "}
              2 Adults 2 Children 1 Room
            </span>
          </div>
          <div className="headerSearchItem">
            <button className="headerBtnAlt">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
