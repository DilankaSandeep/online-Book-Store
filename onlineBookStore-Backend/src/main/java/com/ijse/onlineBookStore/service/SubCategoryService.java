package com.ijse.onlineBookStore.service;



import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.SubCategory;

@Service
public interface SubCategoryService  {
    SubCategory getSubCategoryById(Long id);

}
