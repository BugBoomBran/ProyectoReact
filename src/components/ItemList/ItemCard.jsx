import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div>
      <Card
        sx={{
          margin: "1rem",
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia component="img" alt="image title" height="450px" image={item.img} />
        <CardContent className={styles.cardContent}>
          <div className={styles.cardDescription}>
            <Typography gutterBottom variant="h5" fontWeight="700" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" fontWeight="700" color="text.secondary">
              {item.description}
            </Typography>
          </div>
          <span className={styles.cardPrice}>
            <Typography variant="body2" fontSize="1.2rem" fontWeight="700" component="span">
              US${item.price}
            </Typography>
          </span>
        </CardContent>
        <CardActions className={styles.cardButton}>
          <Link to={`/itemDetail/${item.id}`}>
            <Button variant="contained" size="small">
              Ver detalle
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
