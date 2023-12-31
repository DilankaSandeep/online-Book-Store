package com.ijse.onlineBookStore.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private double price;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private int qnty;

    @Column(nullable=true)
    private String imageUrl;


    @ManyToOne
    @JoinColumn(name="category_id",nullable = false,referencedColumnName ="category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name="subCategory_id",nullable = false)
    private SubCategory subCategory;

}
