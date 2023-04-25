import ItemCard from "./ItemCard";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.containerCard}>
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
