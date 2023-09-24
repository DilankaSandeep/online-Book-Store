package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Order;
import com.ijse.onlineBookStore.repository.OrderRepository;
import com.ijse.onlineBookStore.service.OrderService;



@Service
public class OrderServiceImpl implements OrderService{
    
    private OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Order Not Found"));
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

}