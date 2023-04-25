import React from "react";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card
      sx={{
        margin: "1rem",
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia sx={{ height: 300 }} image={item.img} title="image title" />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardButton}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
