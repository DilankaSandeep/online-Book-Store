package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.OrderItem;
import com.ijse.onlineBookStore.repository.OrderItemRepository;
import com.ijse.onlineBookStore.service.OrderItemService;

@Service
public class OrderItemServiceImpl implements OrderItemService  {
    @Autowired
    OrderItemRepository orderItemRepository;

    @Override
    public OrderItem creatOrderItem(OrderItem orderItem) {
       return orderItemRepository.save(orderItem);
    }

    @Override
    public void deleteOrderItem(Long id) {
         orderItemRepository.deleteById(id);
         return;
    }

    @Override
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    @Override
    public OrderItem getOrderItemById(Long id) {
        return orderItemRepository.findById(id).orElse(null);
    }
    
}
