import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Box,
  Paper,
  Chip,
  TextField,
  Container
} from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const categoryOptions = [
    { value: "all", label: "All Products" },
    { value: "cakes", label: "Cakes" },
    { value: "cookies", label: "Cookies" },
    { value: "brownies", label: "Brownies" }
  ];

  const filteredProducts = products.filter((product) => {
    const name = product.name?.toLowerCase() || "";
    const productCategory = product.category?.toLowerCase() || "";
    const matchesSearch = name.includes(searchText.toLowerCase());
    const matchesCategory = category === "all" || productCategory === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });
  
  
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 600, 
            textAlign: "center",
            marginBottom: 4,
            color: "#d32f2f" 
          }}
        >
          Choose Your Treats 🍰
        </Typography>
        
        {/* Enhanced Filter Section */}
        <Paper 
          elevation={3} 
          sx={{ 
            padding: 3, 
            marginBottom: 4, 
            borderRadius: 2,
            background: "linear-gradient(to right, #fff8e1, #fff)"
          }}
        >
          <Box sx={{ display: "flex", flexDirection: {xs: "column", md: "row"}, gap: 2, alignItems: "center" }}>
            {/* Search Bar */}
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                value={searchText}
                onChange={handleSearchChange}
                label="Search for treats"
                placeholder="Search by name..."
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
            </Box>
            
            {/* Category Filter */}
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                  sx={{ borderRadius: 2 }}
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          
          {/* Active filters display */}
          <Box sx={{ display: "flex", gap: 1, marginTop: 2, flexWrap: "wrap" }}>
            {searchText && (
              <Chip 
                label={`Search: ${searchText}`} 
                onDelete={() => setSearchText("")}
                color="primary"
                size="small"
              />
            )}
            {category !== "all" && (
              <Chip 
                label={`Category: ${category}`} 
                onDelete={() => setCategory("all")}
                color="secondary"
                size="small"
              />
            )}
          </Box>
        </Paper>
        
        {/* Results summary */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
          </Typography>
        </Box>
        
        {/* Product Grid */}
        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.map((product, index) => (
            <Grid item key={product.id || index} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
          
          {filteredProducts.length === 0 && (
            <Box sx={{ padding: 4, textAlign: "center", width: "100%" }}>
              <Typography variant="h6" color="text.secondary">
                No products found matching your criteria.
              </Typography>
            </Box>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;