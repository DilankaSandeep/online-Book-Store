package com.ijse.onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ijse.onlineBookStore.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long>{
    //
}
