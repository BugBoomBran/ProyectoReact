import { FaCartPlus } from "react-icons/fa";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={"./cart"}>
      <div className="cart">
        <FaCartPlus />
        <div className="cart-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
