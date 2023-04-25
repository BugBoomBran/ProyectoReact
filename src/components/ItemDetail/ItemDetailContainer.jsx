import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
