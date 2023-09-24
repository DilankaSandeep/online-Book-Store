import React from 'react';
import { useCart } from '../CartContex';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { removeFromCart } = useCart();
  const [qnty, setQuty] = useState(1);
  const [subtotal, setSubTotal] =useState(0);
  const [total, setTotal] =useState(0);
  
  useEffect(() => {
    const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(cartTotal);
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Sub Total</th>


          </tr>
        </thead>
        <tbody>
          {cart && cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}<div>{ <button onClick={() => removeFromCart(item.id)}>Remove ❌</button>}</div></td>
              <td>{<div>{item.title}</div>}{<div>{<img src={require(`../imges/${item.imageUrl}`)} height={40} width={25} alt={item.title} />}</div>}</td>
              <td>Rs.{item.price}</td>
              <td>Category: {item.category.categoryName}<div>subCategory: {item.subCategory.subCategoryName}</div></td>
              <td>{qnty}</td>

              <td>{qnty*item.price}</td>
            </tr>
          ))

          }
          <tr>
            <td></td>
            <td colSpan={4}>Total</td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;