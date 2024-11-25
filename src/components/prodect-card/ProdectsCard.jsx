import { Box, Button, Card, Grid, Rating, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProdectsCard = () => {
  const [Products, setProducts] = useState([]); // Initialize as an array

  useEffect(() => {
    const productsData = axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((data) => setProducts(data.data));
  }, []);        
       


return (
  <Grid container spacing={2}>
    {Products?.map((product, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Card className="p-2">
          <img src={product?.images[0]} className="img-fluid" alt="" />
          <Typography variant="body2">{product?.category?.name}</Typography>
          <Typography variant="h6">{product?.title}</Typography>
          <Rating name="read-only" value={product?.rating} readOnly />
          <Box className="d-flex justify-content-between align-items-center">
            <Typography>{product?.price}</Typography>
            <Button size="small" variant="contained">
              <AddIcon /> Add
            </Button>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
);

}

export default ProdectsCard;


