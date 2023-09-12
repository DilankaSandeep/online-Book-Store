package com.ijse.onlineBookStore.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "subCategories")
public class SubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long subCategoryId;

    @Column(nullable = false)
    private String subCategoryName;

    @Column
    private String subCategoryDescription;
    @OneToMany(mappedBy = "subCategory")
    private List<Book> books;
}
