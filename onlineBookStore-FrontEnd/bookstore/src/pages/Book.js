import { useEffect, useState } from "react";
import { fetchBooksByCategoery } from "../services/BookService";
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { fetchBook, } from "../services/BookService";
import { useCart } from "../CartContex";

const Books = (props) => {
  const { addToCart } = useCart();
  const [books, setbooks] = useState(null);
  const [bookdetail, setbookdetail] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const categoryId = props.value;

  useEffect(() => {
    const fetchByCategoery = async () => {
      const response = await fetchBooksByCategoery(categoryId);
      setbooks(response);
    }
    fetchByCategoery();
  }, [])

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
        {books && books.length > 0 ? (
          books.map((book) => {

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
                    <p>Price Rs: {bookdetail.price}</p>
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

            )
          })
        ) : (

          <h1 className="notavailable">No books Available from this Category at the Moment 👀</h1>
        )}


      </Row>
    </>
  )
}
export default Books;