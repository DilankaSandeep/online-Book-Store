import { useEffect, useState } from "react";
import { fetchBooks, fetchBooksByCategoery } from "../services/BookService";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import { getRequest, postRequest } from "../services/ApiService";
import axios from "axios";

const Fiction= ()=>{

    const [books, setbooks] = useState(null);
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(null);

    useEffect(()=>{
        const fetchByCategoery=async ()=>{
            const response= await fetchBooksByCategoery("2");
            setbooks(response);
        }
        fetchByCategoery();
    },[])
    const handleOrder = ((book) => {
        const updatedCart = [...order, book]
    
        const updatedTotal = total + book.price;
    
        setOrder(updatedCart);
        setTotal(updatedTotal);
    
      });

    return(
        <>
        <Row className="justify-content-md-center">
          {books && books.map((book) => {
            return (
              <Col key={book.id}>
                <div className="item">
                  <h4>{book.title}</h4>
                  <img src={require(`../imges/${book.imageUrl}`)} height={300} width={200} alt={book.title} />
                  <h5>Author: {book.author}</h5>
                  <p>Category: {book.category.categoryName}</p>
                  <p>Sub Category: {book.subCategory.subCategoryName}</p>
                  <p>Price Rs: {book.price}</p>
                  <p>Available Quntity: {book.qnty}</p>
                  <Button size="sm" id="addtocartbutton" onClick={() => {
                    handleOrder(book)
                  }}>Add to Cart</Button>
                </div>
              </Col>
  
            )
          })}
        </Row>
      </> 
    )
}
export default Fiction;