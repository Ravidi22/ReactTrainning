
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';
import Product from '../types/Product';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Info, ShoppingCart } from "@mui/icons-material";



interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
    onClickDetails: () => void;
  }
  
  export default function ProductCard (props: ProductCardProps){
  return (
    <Card sx={{ maxWidth: 345, width: 300}}>
      <CardMedia
        component="img"
        height={"194px"}
        sx={{ maxHeight: 140, width: "100%" }}
        image={props.product.image}
      />
      <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5" >
            {props.product.name}
        </Typography>
        <Typography variant="h6" >
            {props.product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={props.onAddToCart}
        >
          הוסף לעגלה
          <ShoppingCart />
        </Button>
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          color="secondary"
          onClick={props.onClickDetails}
        >
          פרטים
          <Info />
        </Button>
      </CardActions>
    </Card>
  );
}
