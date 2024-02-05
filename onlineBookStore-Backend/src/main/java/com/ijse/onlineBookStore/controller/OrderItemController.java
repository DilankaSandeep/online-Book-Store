package com.ijse.onlineBookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.OrderItem;
import com.ijse.onlineBookStore.service.OrderItemService;

@CrossOrigin(origins="*")
@RestController
public class OrderItemController {
    @Autowired
    OrderItemService orderItemService;

    @GetMapping("/open/orderItems")
    public ResponseEntity<List<OrderItem>> getAllOrderItems() {
        List<OrderItem> allOrderItems = orderItemService.getAllOrderItems();
        return new ResponseEntity<>(allOrderItems, HttpStatus.OK);
    }

}
