import { useEffect, useState } from "react";
import { getRequest, postRequest, postRequestFile } from "../services/ApiService";
import axios from "axios";
import { fetchUser, fetchUsers } from "../services/UserService";
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const userId = sessionStorage.getItem('user_id');



const Checkout = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState(null);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            const response = await getRequest(`/open/Users/7`);
            console.log("here in jsssss")
            setUser(response);
        }

        getUser();
    }, [])
    useEffect(() => {
        const getOrder = async () => {
            const existingOrder = JSON.parse(localStorage.getItem('order')) || [];
            console.log("here in jsssss");
            setOrder(existingOrder);
        }

        getOrder();
    }, [])
    // useEffect(() => {
    //     const getAllUsers = async () => {
    //         const response = await fetchUsers();
    //          console.log("here in fetchusers")
    //          setUsers(response);

    //     }

    //     getAllUsers();
    // }, [])
    const confirmOrder =()=>{
        const updatedCart = [];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        navigate("/shippingDetails");
    }

    const editOrder=()=>{
        navigate("/Cart")
    }
    return (
        <>
            Checkout Page
            {user && <h1>{user.userName}</h1>}
            {order && <div>
                <h1>{order.id}</h1>
               
                        <>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>NO</th>
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


            {/* {users && users.map((userr)=>{
            return(
                <div>
                {userr.userName}
                {userr.email}
               </div>
            )

               
        })} */}

        </>
    )

}

export default Checkout;