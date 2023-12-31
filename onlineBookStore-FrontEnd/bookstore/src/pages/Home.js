import { useEffect, useState } from "react";
import { fetchBook, fetchBooks } from "../services/BookService";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useCart } from "../CartContex";



const Home = () => {
  const { addToCart } = useCart();
  const [books, setbooks] = useState(null);
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
    const getBook = async () => {
      const responsebook = await fetchBook(id);
      setbookdetail(responsebook);

    }
    getBook();
    handleShow();

  });


  return (
    <>

      <Row className="justify-content-md-center">
        {books && books.map((book) => (
          
          <Col key={book.id}>
            <div className="item">
              <h4>{book.title}</h4>
              <img src={require(`../imges/${book.imageUrl}`)} height={275} width={175} alt={book.title} />
              <h5>Author: {book.author}</h5>
              <p>Category: {book.category.categoryName}</p>
              <p>Sub Category: {book.subCategory.subCategoryName}</p>
              <p>Price Rs: {book.price}</p>
              <p>Available Quntity: {book.qnty}</p>
              <Button size="sm" id="bookDetails" onClick={() => {
                bookDetails(book.id);
              } }>More Deatils</Button>
              {bookdetail &&
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{bookdetail.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img src={require(`../imges/${bookdetail.imageUrl}`)} height={300} width={200} alt={book.title} />
                    <h5>Author: {bookdetail.author}</h5>
                    <p>Category: {bookdetail.category.categoryName}</p>
                    <p>Category Description: {bookdetail.category.categoryDescription}</p>
                    <p>Sub Category: {bookdetail.subCategory.subCategoryName}</p>
                    <p>Description: {bookdetail.description}</p>
                    <p>Price Rs: {bookdetail.price.toFixed(2)}</p>
                    <p>Available Quntity: {bookdetail.qnty}</p>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={()=>{addToCart(bookdetail)}}>
                      Add to Cart
                    </Button>
                  </Modal.Footer>
                </Modal>}
              <Button size="sm" id="addtocartbutton" onClick={() => {
                addToCart(book)
              } }>Add to Cart</Button>
              
            </div>
          </Col>

        ))}
      </Row>
    </>
  )
}
export default Home;