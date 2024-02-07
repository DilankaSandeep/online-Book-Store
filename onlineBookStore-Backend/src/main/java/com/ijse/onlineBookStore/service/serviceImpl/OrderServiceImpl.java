package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.Order;
import com.ijse.onlineBookStore.entity.OrderItem;
import com.ijse.onlineBookStore.entity.User;
import com.ijse.onlineBookStore.repository.BookRepository;
import com.ijse.onlineBookStore.repository.OrderRepository;
import com.ijse.onlineBookStore.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Autowired
    BookServiceImpl bookServiceImpl;

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
    @Transactional
    public Order createOrder(Order order) {

        for (OrderItem item : order.getOrderItems()) {
            Book book = item.getBook();
            book.setQnty(book.getQnty() - item.getQuantity());
            bookServiceImpl.updateBook(book.getId(), book);
        }
        return orderRepository.save(order);
    }

}