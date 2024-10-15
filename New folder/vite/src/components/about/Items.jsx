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
    <div className="container mx-auto p-4">
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
  <div className='text-center mt-8'>
    <h1 className="text-3xl font-bold mb-4">Simple JavaScript Shopping Cart</h1>
    <p className="text-gray-600 mb-2">
      Simplified 'add to cart' functionality. Uses JavaScript
      and WebStorage API/Cookies to remember cart data converted to JSON format.
    </p>
    <p className="text-gray-600 mb-4">Click 'Empty Cart' button to remove session cookies from browser.</p>
    </div>
  </>
);

// ProductList Component
const ProductList = ({ products, addToCart }) => (
  <div className="flex flex-wrap gap-4 justify-center">
    {products.map((product, index) => (
      <Product key={index} product={product} addToCart={addToCart} />
    ))}
  </div>
);

// Product Component (For each product)
const Product = ({ product, addToCart }) => (
  <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
    <h3 className="text-xl font-semibold">{product.name}</h3>
    <p className="text-gray-600">{product.description}</p>
    <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
    <button
      className="bg-orange-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-orange-600 transition"
      onClick={() => addToCart(product)}
    >
      Add To Cart
    </button>
  </div>
);

// Cart Component
const Cart = ({ cart, totalItems, totalPrice, emptyCart }) => (
  <div className="border p-4 mt-6 rounded-lg shadow-lg bg-white">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    <CartTable cart={cart} />
    <hr className="my-4" />
    <CartTotals totalItems={totalItems} totalPrice={totalPrice} />
    <CartButtons emptyCart={emptyCart} />
  </div>
);

// CartTable Component (displays the list of items in the cart)
const CartTable = ({ cart }) => (
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="text-left py-2">Product</th>
        <th className="text-right py-2">Price</th>
      </tr>
    </thead>
    <tbody id="carttable">
      {cart.map((item, index) => (
        <tr key={index}>
          <td className="py-2">{item.name}</td>
          <td className="text-right py-2">${item.price.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// CartTotals Component (displays total items and price)
const CartTotals = ({ totalItems, totalPrice }) => (
  <table id="carttotals" className="table-auto w-full">
    <tbody>
      <tr>
        <td className="text-left py-2">Items</td>
        <td className="text-right py-2">Total</td>
      </tr>
      <tr>
        <td className="text-left py-2">x <span id="itemsquantity">{totalItems}</span></td>
        <td className="text-right py-2">$<span id="total">{totalPrice}</span></td>
      </tr>
    </tbody>
  </table>
);

// CartButtons Component (Empty Cart and Checkout buttons)
const CartButtons = ({ emptyCart }) => (
  <div className="flex justify-end gap-4 mt-4">
    <button
      id="emptycart"
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
      onClick={emptyCart}
    >
      Empty Cart
    </button>
    <button id="checkout" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
      Checkout
    </button>
  </div>
);

export default Items;
