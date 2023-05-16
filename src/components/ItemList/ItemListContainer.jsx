import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { dataBase } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(dataBase, "products");

    if (categoryName) {
      const itemCollectionFiltered = query(itemCollection, where("category", "==", categoryName));
      consulta = itemCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
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
