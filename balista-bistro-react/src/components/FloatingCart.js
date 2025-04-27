import React from 'react';
function FloatingCart({ cartCount }) {
  return (
    <div className="floating-cart">
      <img src="/images/shoppingbasket-white.png" alt="Cart" className="cart-icon" />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}
export default FloatingCart;
