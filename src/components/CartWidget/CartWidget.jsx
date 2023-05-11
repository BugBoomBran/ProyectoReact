import { FaCartPlus } from "react-icons/fa";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  let total = totalQuantity();

  return (
    <Link to={"./cart"}>
      <div className="cart">
        <FaCartPlus />
        <div className="cart-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
