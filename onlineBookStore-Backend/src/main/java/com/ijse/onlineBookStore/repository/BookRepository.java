package com.ijse.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.Book;

public interface BookRepository extends JpaRepository<Book,Long>{
    //
}
