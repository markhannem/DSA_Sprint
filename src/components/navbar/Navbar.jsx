import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">NFLDtravel</span>
        <div className="navItems">
          <button className="navBtn">SIGNUP</button>
          <button className="navBtn">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
