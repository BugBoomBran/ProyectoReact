import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === Number(id));
    setProduct(encontrado);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      title: "Muy bien!",
      text: `Se agregó ${cantidad} ${product.title} al carrito`,
      imageUrl: `${product.img}`,
      imageWidth: 100,
      imageHeight: 80,
      imageAlt: "product image",
      position: "top-end",
      width: 200,
      heightAuto: 100,
      timer: 2000,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} />
    </div>
  );
};

export default ItemDetailContainer;
