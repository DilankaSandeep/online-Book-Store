import React from 'react';
import { useCart } from '../CartContex';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { createOrder } from '../services/CartService';
import { useNavigate } from "react-router-dom";
import { fetchUser, fetchUserByUsername } from '../services/UserService';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const { removeFromCart } = useCart();
  const [total, setTotal] =useState(0);
  const [orderQuantities, setOrderQuantities] = useState({});
  const[order,setOrder] = useState([]);
  const [status, setStatus] = useState("");
  const [orderItems,setOrderItems]= useState([]);
  const[username, setUsername] =useState(null);
  const [user ,setUser] = useState(null);
  //const userId = sessionStorage.getItem('user_id');
  const usernameformstorage = localStorage.getItem('username') || 'Dilanka';
  useEffect(()=>{
    setUsername(usernameformstorage);
  },[]);
  
  useEffect(() => {
    const cartTotal = cart.reduce((acc, item) => {
      const orderQuantity = orderQuantities[item.id] || 1; 
      return acc + item.price * orderQuantity;
    }, 0);
    setTotal(cartTotal);
  }, [cart, orderQuantities]);

   useEffect(() => {
        const getUserByusername = async () => {
            const response = await fetchUserByUsername(username);
            console.log("here in getbyUsername")
            console.log(response)
           setUser(response);
        }

        getUserByusername();
    }, [username])


  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
    const increaseOrderQuantity = (itemId) => {
      setOrderQuantities((prevOrderQuantities) => ({
        ...prevOrderQuantities,
        [itemId]: (prevOrderQuantities[itemId] || 0) + 1,
      }));
    };
  

    const decreaseOrderQuantity = (itemId) => {
      setOrderQuantities((prevOrderQuantities) => ({
        ...prevOrderQuantities,
        [itemId]: Math.max((prevOrderQuantities[itemId] || 0) - 1, 1), 
      }));
    };

    const placeOrder = async () => {
      setStatus("pending");
       // Validate order quantities before placing the order
    const isOrderValid = cart.every((item) => {
      const orderedQuantity = orderQuantities[item.id] || 1;
      return orderedQuantity <= item.qnty;
    });

    if (!isOrderValid) {
      window.alert('Invalid order quantity for one or more items. Please check the available quanties and change order quanties accordingly');
      return;
    }
      const orderItems = cart.map((item) => ({
        book: {
          id: item.id,
          title: item.title,
          price: item.price,
          category:item.category,
          subCategory:item.subCategory,
          imageUrl:item.imageUrl,
          qnty: item.qnty,
          
        },
        quantity: orderQuantities[item.id] || 1,
      }));
    
      const data = {
        status: status,
        user: {
          id: user.id,
        },
        orderItems: orderItems,
        orderTotal: total,
      };
    
      const response = await createOrder(data);
    
      if (response) {
        localStorage.setItem('order', JSON.stringify(response));
        navigate("/Checkout");
      } else {
        navigate("/");
      }
    }
    



  return (
    
    <div className="cart">
    <h4>Your Cart</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Order Quantity</th>
            <th>Sub Total</th>


          </tr>
        </thead>
        <tbody>
          {cart && cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}<div>{ <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>❌</Button>}</div></td>
              <td>{<div>{item.title}</div>}{<div>{<img src={require(`../imges/${item.imageUrl}`)} height={40} width={25} alt={item.title} />}</div>}</td>
              <td>Rs.{item.price}</td>
              <td>Category: {item.category.categoryName}<div>subCategory: {item.subCategory.subCategoryName}</div></td>
              <td> <Button variant="outline-warning" className ="decreaseButton" onClick={() => decreaseOrderQuantity(item.id)}>-</Button>
                {orderQuantities[item.id] || 1}
                <Button variant="outline-primary" onClick={() => increaseOrderQuantity(item.id)}>+</Button></td>

              <td>{(item.price * (orderQuantities[item.id] || 1)).toFixed(2)}</td>
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
      <div className='plaseOrder'><Button variant='primary' onClick={placeOrder}>Checkout</Button></div>
    </div>
        

  );
};

export default Cart;