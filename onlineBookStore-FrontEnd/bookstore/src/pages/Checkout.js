import { useEffect, useState } from "react";
import { getRequest, postRequest, postRequestFile } from "../services/ApiService";
import axios from "axios";
import { fetchUser, fetchUsers } from "../services/UserService";
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { updateBook } from "../services/BookService";

const usernameformstorage = localStorage.getItem('username');


const Checkout = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);
    const [order, setOrder] = useState(null);
    const [users, setUsers] = useState(null);
    const[username, setUsername] =useState(null);
    const [orderItems,setOrderItems]= useState([]);
    const [bookId,setBookId]= useState('');

    
    useEffect(()=>{
        setUsername(usernameformstorage);
    })


    useEffect(() => {
        
        const getOrder = async () => {
            const existingOrder = JSON.parse(localStorage.getItem('order')) || [];
            console.log("here in jsssss");
            setOrder(existingOrder);
            setUserId(existingOrder.user.id);
        }

        getOrder();
    }, [])
    const updatebookStore = async () => {
   
        const updatedOrderItems = order.orderItems.map((item) => {
          item.book.qnty = item.book.qnty - item.quantity;
          return (item.book)
        });
      
        // Use Promise.all to update all books concurrently
        const updatePromises = updatedOrderItems.map(async (item) => {
          return await updateBook(item.id, item);
        });
      
        try {
          await Promise.all(updatePromises);
      
          // All books updated successfully
          //  set the updatedOrderItems state or perform any other actions
          setOrderItems(updatedOrderItems);
        } catch (error) {
          console.error("Error updating books:", error);
          // Handle the error if needed
        }
      };
      


    const confirmOrder =()=>{
        const updatedCart = [];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updatebookStore();
        navigate("/shippingDetails");
    }

    const editOrder=()=>{
        navigate("/Cart")
    }
    return (
        <>
           
            {order && <div>

                <h4>Loged Customer: {username}</h4>
               
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>Order ID</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Order Quantity</th>
                                        <th>Sub Total(Rs.)</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {order.orderItems.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{order.id}</td>
                                            <td>{<div>{item.book.title}</div>}{<div>{<img src={require(`../imges/${item.book.imageUrl}`)} height={40} width={25} alt={item.book.title} />}</div>}</td>
                                            <td>Rs.{item.book.price.toFixed(2)}</td>
                                            <td>Category: {item.book.category.categoryName}<div>subCategory: {item.book.subCategory.subCategoryName}</div></td>
                                            <td>{item.quantity}</td>
                                            <td>{(item.quantity*(item.book.price)).toFixed(2)}</td>
                                        </tr>
                                    ))

                                    }
                                    <tr>
                                        <td></td>
                                        <td colSpan={4}>Total</td>
                                        <td>{order.orderTotal.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Container flex className="plaseOrder">
                            <Button variant='warning' onClick={editOrder}>Change Order</Button>
                            <Button variant='primary' className='plaseOrder' onClick={confirmOrder}>confirm Order</Button>
                            </Container>
               
                        </> 
            </div>}


        </>
    )

}

export default Checkout;