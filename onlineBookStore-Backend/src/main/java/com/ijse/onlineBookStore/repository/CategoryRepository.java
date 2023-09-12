package com.ijse.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.Category;

import lombok.extern.java.Log;

public interface CategoryRepository  extends JpaRepository<Category,Long>{
    //
}
