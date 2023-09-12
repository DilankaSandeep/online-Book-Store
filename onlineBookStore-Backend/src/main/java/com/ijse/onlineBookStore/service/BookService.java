package com.ijse.onlineBookStore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.entity.SubCategory;
@Service
public interface BookService {
    Book createBook(Book book);
    Book updateBook(Long id,Book book);
    List<Book> getAllBooks();
    Book getBookById(Long id);
    List<Book> getBooksBySubCategory(SubCategory subCategory);
    List<Book> getBooksByCategory(Category category);
    void deleteBookById(Long id);


}
