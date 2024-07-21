import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const items = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">
          Cart items 🛒:{items.length}
        </span>
        <span>Total: {total}</span>
      </div>
    </div>
  );
};

export default NavBar;
