import { useEffect, useState } from "react";
import { fetchBooks } from "../services/BookService";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Button, Table, Modal, Form } from 'react-bootstrap';
import { getRequest, postRequest } from "../services/ApiService";

// const userId = sessionStorage.getItem('userId');

const Home = () => {


  const [books, setbooks] = useState(null);
  const [user, setuser] = useState(null);
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetchBooks();
      setbooks(response);
    }

    fetchItems();

  }, []);

  // useEffect(() => {

  //   const fetchUser = async () => {
  //     const response = await getRequest(`open/User/${userId}`);

  //     if (response && response.status === 200) {
  //       setuser(response.data);
  //     }
  //   }

  //   fetchUser();

  // }, userId)
  const handleOrder = ((book) => {
    const updatedCart = [...order, book]

    const updatedTotal = total + book.price;

    setOrder(updatedCart);
    setTotal(updatedTotal);

  });

  return (
    <>
      {/* {user &&
        <div>{user.userName}</div>} */}
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
export default Home;