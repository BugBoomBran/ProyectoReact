import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

import { ArrowBack } from "@mui/icons-material";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className={styles.itemDetailbuttom}>
        <Link to="/">
          <Button variant="contained">
            <ArrowBack></ArrowBack> Volver al listado
          </Button>
        </Link>
      </div>
      <div className={styles.containerItemDetail}>
        <div className={styles.itemDetailImage}>
          <img src={product.img} alt="" />
        </div>
        <div className={styles.itemDetailText}>
          <div className={styles.textDescription}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
          <div className={styles.textPrice}>
            <p>US${product.price}</p>
          </div>
          <div className={styles.textSpan}>
            <span>Disponibilidad: {product.stock}</span>
            <span>Categoría: {product.category}</span>
          </div>
          <div className={styles.textCounter}>
            <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
