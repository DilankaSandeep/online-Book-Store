package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.entity.SubCategory;
import com.ijse.onlineBookStore.repository.BookRepository;
import com.ijse.onlineBookStore.repository.SubCategoryRepository;
import com.ijse.onlineBookStore.service.BookService;
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Long id, Book book) {
        Book existBook= bookRepository.findById(id).orElse(null);
        if(existBook!=null){
            existBook.setTitle(book.getTitle());
            existBook.setAuthor(book.getAuthor());
            existBook.setCategory(book.getCategory());
            existBook.setDescription(book.getDescription());
            existBook.setPrice(book.getPrice());
            existBook.setSubCategory(book.getSubCategory());
            return bookRepository.save(existBook);
        }else{
            return null;
        }
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }

    @Override
    public List<Book> getBooksBySubCategory(SubCategory subCategory) {
        return subCategory.getBooks();
    }

    @Override
    public void deleteBookById(Long id) {
         bookRepository.deleteById(id);
         return;
    }

    @Override
    public List<Book> getBooksByCategory(Category category) {
        return category.getBooks();
    }
    
}
