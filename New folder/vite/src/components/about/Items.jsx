import React, { useState } from 'react';

const Items = () => {
  const [cart, setCart] = useState([]);

  // Products data
  const products = [
    { name: 'Product 1', description: 'Product description excerpt...', price: 5.05 },
    { name: 'Product 2', description: 'Product description excerpt...', price: 8.50 },
    { name: 'Product 3', description: 'Product description excerpt...', price: 10.50 }
  ];

  // Add product to cart function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Empty the cart
  const emptyCart = () => {
    setCart([]);
  };

  // Calculate total items and total price
  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0).toFixed(2);

  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* Products List */}
      <ProductList products={products} addToCart={addToCart} />

      {/* Cart Section */}
      <Cart cart={cart} totalItems={totalItems} totalPrice={totalPrice} emptyCart={emptyCart} />
    </div>
  );
};

// Header Component
const Header = () => (
  <>
    <h1>Simple JavaScript Shopping Cart</h1>
    <p>
      Simplified 'add to cart' functionality. Uses JavaScript
      and WebStorage API/Cookies to remember cart data converted to JSON format.
    </p>
    <p>Click 'Empty Cart' button to remove session cookies from browser.</p>
    <div id="alerts"></div>
  </>
);

// ProductList Component
const ProductList = ({ products, addToCart }) => (
  <div className="productcont">
    {products.map((product, index) => (
      <Product key={index} product={product} addToCart={addToCart} />
    ))}
  </div>
);

// Product Component (For each product)
const Product = ({ product, addToCart }) => (
  <div className="product">
    <h3 className="productname">{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">${product.price.toFixed(2)}</p>
    <button className="addtocart" onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  </div>
);

// Cart Component
const Cart = ({ cart, totalItems, totalPrice, emptyCart }) => (
  <div className="cart-container">
    <h2>Cart</h2>
    <CartTable cart={cart} />
    <hr />
    <CartTotals totalItems={totalItems} totalPrice={totalPrice} />
    <CartButtons emptyCart={emptyCart} />
  </div>
);

// CartTable Component (displays the list of items in the cart)
const CartTable = ({ cart }) => (
  <table>
    <thead>
      <tr>
        <th><strong>Product</strong></th>
        <th><strong>Price</strong></th>
      </tr>
    </thead>
    <tbody id="carttable">
      {cart.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>${item.price.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// CartTotals Component (displays total items and price)
const CartTotals = ({ totalItems, totalPrice }) => (
  <table id="carttotals">
    <tbody>
      <tr>
        <td><strong>Items</strong></td>
        <td><strong>Total</strong></td>
      </tr>
      <tr>
        <td>x <span id="itemsquantity">{totalItems}</span></td>
        <td>$<span id="total">{totalPrice}</span></td>
      </tr>
    </tbody>
  </table>
);

// CartButtons Component (Empty Cart and Checkout buttons)
const CartButtons = ({ emptyCart }) => (
  <div className="cart-buttons">
    <button id="emptycart" onClick={emptyCart}>Empty Cart</button>
    <button id="checkout">Checkout</button>
  </div>
);

export default Items;
