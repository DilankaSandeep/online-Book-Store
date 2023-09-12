package com.ijse.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.SubCategory;

public interface SubCategoryRepository extends JpaRepository<SubCategory,Long> {
    //
}
