import React from 'react'

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
  <>

  
  
  </>
  )
}

export default Items
