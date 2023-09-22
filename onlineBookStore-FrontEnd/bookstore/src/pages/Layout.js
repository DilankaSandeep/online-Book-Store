import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.scss'
import Home from "./Home";
import { useNavigate } from "react-router-dom";



const Layout=()=>{
  const navigate = useNavigate();

  const handleBacktoHome=()=>{
    navigate("/")
  }
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
            <Nav.Link href="/Categories">All Categories</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Fiction">Fiction</NavDropdown.Item>
              <NavDropdown.Item href="/SchoolBook">School Books</NavDropdown.Item>
              <NavDropdown.Item href="/ChildernsBook">Children's Books</NavDropdown.Item>
              <NavDropdown.Item href="/Science&Tecnology">Science & Technology</NavDropdown.Item>
              <NavDropdown.Item href="/Religous&Spiritiality">Religion & Spirituality</NavDropdown.Item>
              <NavDropdown.Item href="/CookBook">Cook Books and Food</NavDropdown.Item>
              <NavDropdown.Item href="/Health&Fitness">Health & Fitness</NavDropdown.Item>
              <NavDropdown.Item href="/Business">Business & Economics</NavDropdown.Item>
              <NavDropdown.Item href="/Arts">Art</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Novels">Novels</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sdaf">About Us</Nav.Link>
            <Nav.Link href="/User" id="login">LOG IN/SIGN UP  </Nav.Link>
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
                <Container  fluid >
                  <div className="footer">
                  <p>Buy books online from anywhere in the world</p>
                  <p>Signup To Be The First To Hear About Exclusive Deals, Special Offers And Upcoming Collections</p>
                  <Button variant="info" onClick={handleBacktoHome}>Back to Home Page</Button>
                  </div>
                  <div className="followus">
                    <p className="m-4">Follow Us</p>
                    <Nav.Link href="#facebook"><img src={require("../imges/fbplusinsta.png")} width="120" height="60" /></Nav.Link> 
                    {/* <Nav.Link href="#instagram"><img src={require("../imges/insta.jpeg")} width="65" height="55" /></Nav.Link>  */}
                    
                  </div>
                </Container>
                
            </footer>
        </div>
    )
}

export  default Layout;