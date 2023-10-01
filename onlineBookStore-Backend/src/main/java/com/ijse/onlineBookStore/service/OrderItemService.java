package com.ijse.onlineBookStore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.OrderItem;

@Service
public interface OrderItemService {

    OrderItem creatOrderItem(OrderItem orderItem);

    void deleteOrderItem(Long id);

    List<OrderItem> getAllOrderItems();

    OrderItem getOrderItemById(Long id);

}
