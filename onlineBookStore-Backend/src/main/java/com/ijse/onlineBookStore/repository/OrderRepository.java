package com.ijse.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
    
}
