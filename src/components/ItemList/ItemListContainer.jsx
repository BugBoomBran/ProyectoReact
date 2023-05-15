import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter((prod) => prod.category === categoryName);

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 1000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SyncLoader color="#297ea6" size={30} />
        </div>
      )}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
