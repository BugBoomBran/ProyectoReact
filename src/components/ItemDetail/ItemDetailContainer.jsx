import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { dataBase } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(dataBase, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch();
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
