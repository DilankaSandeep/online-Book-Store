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
@Table(name="categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="category_id")
    private long categoryId;

    @Column(nullable=false)
    private String categoryName;

    @Column
    private String categoryDescription;

    // @OneToMany(mappedBy = "category")
    // private List<Book> books;


}
