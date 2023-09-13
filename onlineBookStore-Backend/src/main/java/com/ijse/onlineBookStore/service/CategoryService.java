package com.ijse.onlineBookStore.service;

import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Category;

@Service
public interface CategoryService  {
    Category getCategoryById(Long id);
}
