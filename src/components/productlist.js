import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://friendly-space-fiesta-97prp7q99pq2x96j.github.dev/api/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (!products.length) {
    return <div>No products found.</div>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id || product._id}>
          <strong>{product.name}</strong>
          {product.price && <> - ₹{product.price}</>}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;