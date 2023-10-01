package com.ijse.onlineBookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ijse.onlineBookStore.entity.Category;
import com.ijse.onlineBookStore.entity.User;

import com.ijse.onlineBookStore.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/open/Users/{id}")
    private ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        System.out.println("Here in getUserById");
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @GetMapping("/open/Users/")
    private ResponseEntity<List<User>>getAllUsers() {
        List<User> users = userService.getAllUsers();
        System.out.println("Here in getAllUsers in userController");
          return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }
}
