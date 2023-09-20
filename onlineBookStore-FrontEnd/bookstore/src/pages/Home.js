import { useEffect, useState } from "react";
import { fetchBook, fetchBooks } from "../services/BookService";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import { getRequest, postRequest } from "../services/ApiService";


// const userId = sessionStorage.getItem('userId');

const Home = () => {


  const [books, setbooks] = useState(null);
  const [user, setuser] = useState(null);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(null);
  const [bookdetail, setbookdetail] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetchBooks();
      setbooks(response);
    }

    fetchItems();

  }, []);


  const bookDetails = ((id) => {
    const getBook = () => {
      const response = fetchBook(id);
      setbookdetail(response);
    }
    getBook();
    handleShow();

  });
  const handleOrder = ((book) => {
    const updatedCart = [...order, book]

    const updatedTotal = total + book.price;

    setOrder(updatedCart);
    setTotal(updatedTotal);

  });
  const addtocart = () => {
    handleOrder(bookdetail);
  }

  return (
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
                <Button size="sm" id="bookDetails" onClick={() => {
                  bookDetails(book.id)
                }}>More Deatils</Button>
                {bookdetail &&
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{bookdetail.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h4>{book.title}</h4>
                      <img src={require(`../imges/${book.imageUrl}`)} height={300} width={200} alt={book.title} />
                      <h5>Author: {book.author}</h5>
                      <p>Category: {book.category.categoryName}</p>
                      <p>Category Description: {book.category.categoryDescription}</p>
                      <p>Sub Category: {book.subCategory.subCategoryName}</p>
                      <p>Description: {book.description}</p>
                      <p>Price Rs: {book.price}</p>
                      <p>Available Quntity: {book.qnty}</p>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={addtocart}>
                        Add to Cart
                      </Button>
                    </Modal.Footer>
                  </Modal>
                }
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
export default Home;