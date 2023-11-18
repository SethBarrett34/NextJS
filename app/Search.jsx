import React, { useState, useEffect } from "react";

export default function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch products from the API when the component mounts
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    // Filter products based on the search input
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search, products]);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around", // Adjust as needed
  };
  
  const productBoxStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    width: "200px", // Adjust the width as needed
    textAlign: "center",
  };
  
  return (
    <div>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
  
      {/* Product table */}
      <div style={productContainerStyle}>
        {filteredProducts.slice(0, 20).map((product) => (
          <div key={product.id} style={productBoxStyle}>
            <h3>{product.title}</h3>
            <img style={{ width: "100px" }} src={product.image} alt={product.title} />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}