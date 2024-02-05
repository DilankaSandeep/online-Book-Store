package com.ijse.onlineBookStore.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        @PostMapping("/open/books/")
    public ResponseEntity<Book> getBookById(@RequestBody Book book){
        Book newBook=bookService.createBook(book);
        return new ResponseEntity<Book>(newBook,HttpStatus.OK);
    }
    @PutMapping("/open/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id,@RequestBody Book book){
        try {
            System.out.println(book);
           Book updatedBook = bookService.updateBook(id, book);
           System.out.println(updatedBook);
            return ResponseEntity.status(HttpStatus.OK).body(updatedBook);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
       @DeleteMapping("/open/books/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        try {
           bookService.deleteBookById(id);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
