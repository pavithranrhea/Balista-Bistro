import React from 'react';
import ProductCard from './ProductCard';
function ProductList({ products, handleAddToCart }) {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </section>
  );
}
export default ProductList;
