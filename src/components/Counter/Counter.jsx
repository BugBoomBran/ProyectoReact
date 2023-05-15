import { Button } from "@mui/material";
import styles from "./Counter.module.css";
import { Link } from "react-router-dom";

const Counter = ({ counter, sumar, restar, onAdd }) => {
  return (
    <div className={styles.counterButton}>
      <Button variant="contained" onClick={restar}>
        -
      </Button>
      <h2>{counter}</h2>
      <Button variant="contained" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </Button>

      <Link to={"../cart"}>
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};

export default Counter;
