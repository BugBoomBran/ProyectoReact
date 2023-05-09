import { Button } from "@mui/material";
import styles from "./Counter.module.css";

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
    </div>
  );
};

export default Counter;
