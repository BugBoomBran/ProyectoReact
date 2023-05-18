import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Link, Outlet } from "react-router-dom";
import "../../App.css";
import { dataBase } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(dataBase, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <nav className={styles.containerNavbar}>
        <Link to={"/"}>
          <h1>TecnoBoom</h1>
        </Link>
        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>

        <CartWidget />
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
