## Book Land Online Book Store

Welcome to the Online Book Store App! This is a web application built using Spring Boot and React.js, designed to provide a seamless shopping experience for book enthusiasts. This README file will guide you through the application's features, setup, and usage.
Table of Contents

    Features
    Technologies Used
    Getting Started
        Prerequisites
        Installation
    Usage
        Navigating the Website
        Browsing Books
        User Authentication
        Shopping Cart
        Placing an Order
    Contributing
    License

Features

    User-friendly Navigation: The web page layout includes a navigation bar with links to Home, All Categories, Category Dropdown, About Us, and Cart.

    Book Listings: On the Home page, you can view a list of books. Clicking on the "More Details" button for each book provides a modal view with all the book details and Add cart button is also there to add to Cart.

    Category Filtering: You can filter books by categories and subcategories, helping you find specific types of books easily.

    Shopping Cart: Each book listing includes an "Add to Cart" button. You can add books to your shopping cart from any page and review the contents at any time.

    User Authentication: To place an order, users need to log in using their username and password. If you're a new user, you can register by providing your profile details.

    Order Placement: Once logged in, you can update the quantity of books in your cart and place an order.

    Footer: The footer includes a "Back to Home" button and links to our social media profiles.

Technologies Used

    Frontend:
        React.js
        React Router (for page navigation)
        Axios (for API communication)
        React-Bootstrap (for styling)
        Sass (CSS Compiler)
    Backend:
        Spring Boot (Java)
        Spring Security (for user authentication)
        Spring Data JPA (for database interaction)
        RESTful API endpoints
    Database:
        MySQL 

Getting Started
Prerequisites

Before you can run the application, ensure that you have the following prerequisites installed:

    Node.js and npm (for the React.js frontend)
    Java Development Kit (JDK) 11 or higher (for the Spring Boot backend)
    MySQL or another relational database system

Installation

    Clone the Repository:

    bash

git clone <repository_url>
cd online-book-store

Frontend Setup:

bash

cd frontend
npm install
npm start

Backend Setup:

    Configure your database connection in the application.properties file.

bash

cd backend
./mvnw spring-boot:run

Access the Application:

Open your web browser and navigate to http://localhost:3000 to access the Online Book Store App.
### Usage
Navigating the Website

    Use the navigation bar to access different sections of the website: Home, All Categories, About Us, and Cart.

Browsing Books

    On the Home page, you'll find a list of books.
    Click the "More Details" button on any book to view a modal with all the book details.
    Use category filters to narrow down your book choices.

User Authentication

    Click the "User Register" or "Login" button in the navigation bar to access user registration and login pages.
    Register by providing your account details or log in with your existing credentials.

Shopping Cart

    Add books to your shopping cart by clicking the "Add to Cart" button on each book listing.
    Review and update the cart's contents on the Cart page.

Placing an Order

    To place an order, make sure you're logged in.
    Go to the Cart page and adjust the quantity of books as needed.
    Click the "Checkout" button to complete your purchase.
    Reivew and confirm the order or go back to cart to change the order. 
    After confirm the order fill form for shipping deatils and complete the order placement.

### Version
0.1.0

### License
Copyright &copy; 2023 DEP-11 Dilanka. All Rights Reserved. <br>
This project is licensed under the [MIT License](License.txt)
