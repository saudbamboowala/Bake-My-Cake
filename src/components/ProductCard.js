import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
  Box
} from '@mui/material';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    console.log("Navigating to order with product:", product);
    navigate('/order', { state: { product } });
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || '/placeholder-cake.jpg'} 
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" color="primary">
            ₹{product.price}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={product.rating} precision={0.5} readOnly size="small" />
            <Typography variant="body2" sx={{ ml: 0.5 }}>
              ({product.rating})
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
          {product.description?.substring(0, 100)}
          {product.description?.length > 100 ? '...' : ''}
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          variant="contained" 
          fullWidth
          onClick={handleOrderClick}
        >
          Order Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;