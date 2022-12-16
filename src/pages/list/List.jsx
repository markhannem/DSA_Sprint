import "./List.css";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";

const list = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer"></div>
    </div>
  );
};

export default list;
