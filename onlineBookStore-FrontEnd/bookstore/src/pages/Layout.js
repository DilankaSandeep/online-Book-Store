import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Layout=()=>{
    return(
        <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       
        <Navbar.Brand href="#"> <img src={require("../imges/booklandlogo.jpeg")} width="100" height="75" alt="BookLand Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">All Categories</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Fiction</NavDropdown.Item>
              <NavDropdown.Item href="#action4">School Books</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Children's Books</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Science & Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Religion & Spirituality</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cook Books and Food</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Health & Fitness</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Business & Economics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Art</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Novels</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sdaf">About Us</Nav.Link>
            <Nav.Link href="#Actoion"><img src={require("../imges/cart-icon-28356.png")} width="35" height="35" alt="BookLand Logo"/></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <Container className="py-4">
                <Outlet />
            </Container>



            <footer className="bg-body-tertiary py-3">
                <Container>
                    This is the footer
                </Container>
            </footer>
        </div>
    )
}

export  default Layout;