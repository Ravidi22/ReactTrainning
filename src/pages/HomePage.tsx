import React from 'react';
import ProductCard from "../componenet/ProductCard";
import products from "../data/Products.json";
import Product from '../types/Product';
import Grid from '@mui/material/Grid';

export default function HomePage() {
 
  return (
    <Grid container rowSpacing={3} columnSpacing={2} justifyContent="center">
    {products.map((p: Product) => (
      <Grid item key={p.id}>
        <ProductCard
          product={p}
          onClickDetails={() => {}}
          onAddToCart={() => {}}
        />
      </Grid>
    ))}
  </Grid>
  );
}
