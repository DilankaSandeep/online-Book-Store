package com.ijse.onlineBookStore.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.SubCategory;
import com.ijse.onlineBookStore.repository.SubCategoryRepository;
import com.ijse.onlineBookStore.service.SubCategoryService;
@Service
public class SubCategoryServiceImpl implements SubCategoryService {
    @Autowired
    SubCategoryRepository subCategoryRepository;

    @Override
    public SubCategory getSubCategoryById(Long id) {
        return  subCategoryRepository.findById(id).orElse(null);
    }
    
}
