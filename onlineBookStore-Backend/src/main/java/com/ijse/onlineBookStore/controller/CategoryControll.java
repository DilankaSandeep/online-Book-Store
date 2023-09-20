package com.ijse.onlineBookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.service.CategoryService;

@CrossOrigin(origins="*")
@RestController
public class CategoryControll {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/open/books/categories")
    private ResponseEntity<List<Category>> getAllCategories(){
        List<Category> allCategories = categoryService.getAllCategories();
        return new ResponseEntity<List<Category>>(allCategories,HttpStatus.OK);
    }
    
}
