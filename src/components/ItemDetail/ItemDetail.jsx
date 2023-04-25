import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <div className={styles.containerItemDetail}>
        <div className={styles.itemDetailImage}>
          <img src={product.img} alt="" />
        </div>
        <div className={styles.itemDetailText}>
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <h2>{product.price}</h2>
        </div>
      </div>
      <div className={styles.itemDetailbuttom}>
        <Link to="/">
          <Button variant="contained">Regresar</Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
