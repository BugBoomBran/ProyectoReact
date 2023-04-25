import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to={"/"}>
          <h1>TecnoBoom</h1>
        </Link>
        <div className={styles.categories}>
          <Link to="/">Todo</Link>
          <Link to="/category/celulares">Celulares</Link>
          <Link to="/category/notebooks">Notebooks</Link>
        </div>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
