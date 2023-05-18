import { useEffect, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const stockSwal = () => {
    Swal.fire({
      position: "top",
      icon: "info",
      title: "Has alcanzado el stock máximo",
      showConfirmButton: true,
      timer: 1500,
      color: "#297ea6",
    });
  };

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : <div>{stockSwal()}</div>;
  };
  const restar = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div>
      <Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd} />
    </div>
  );
};

export default CounterContainer;
