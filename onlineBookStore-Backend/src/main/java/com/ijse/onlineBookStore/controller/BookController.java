package com.ijse.onlineBookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.entity.SubCategory;
import com.ijse.onlineBookStore.service.BookService;
import com.ijse.onlineBookStore.service.CategoryService;
import com.ijse.onlineBookStore.service.SubCategoryService;


@CrossOrigin(origins="*")
@RestController
public class BookController {
    @Autowired
    BookService bookService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    SubCategoryService subCategoryService;

    @GetMapping("/open/books")
    public ResponseEntity<List<Book>> getAllBooks(){
        List<Book> allBooks = bookService.getAllBooks();
        return new ResponseEntity<>(allBooks, HttpStatus.OK);
    }
    @GetMapping("/open/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        Book book=bookService.getBookById(id);
        return new ResponseEntity<Book>(book,HttpStatus.OK);
    }

    @GetMapping("/open/books/categories/{id}")
    public ResponseEntity<List<Book>> getBooksByCategory(@PathVariable Long id){
        Category category = categoryService.getCategoryById(id);
        List<Book> bookListByCategory= bookService.getBooksByCategory(category);
        return new ResponseEntity<List<Book>>(bookListByCategory, HttpStatus.OK);
    }
        @GetMapping("/open/books/subcategories/{id}")
    public ResponseEntity<List<Book>> getBooksBySubCategory(@PathVariable Long id){
        SubCategory subCategory = subCategoryService.getSubCategoryById(id);
        List<Book> bookListBySubCategory= bookService.getBooksBySubCategory(subCategory);
        return new ResponseEntity<List<Book>>(bookListBySubCategory, HttpStatus.OK);
    }

}
