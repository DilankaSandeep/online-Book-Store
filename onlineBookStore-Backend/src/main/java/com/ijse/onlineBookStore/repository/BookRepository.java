package com.ijse.onlineBookStore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.entity.SubCategory;

public interface BookRepository extends JpaRepository<Book,Long>{
    List<Book> findByCategory(Category category);
    List<Book> findBySubCategory(SubCategory subCategory);
}
