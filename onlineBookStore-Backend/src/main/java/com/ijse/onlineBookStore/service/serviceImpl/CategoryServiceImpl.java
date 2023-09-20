package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.repository.CategoryRepository;
import com.ijse.onlineBookStore.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public List<Category> getAllCategories() {
       return categoryRepository.findAll();
    }
    
}
