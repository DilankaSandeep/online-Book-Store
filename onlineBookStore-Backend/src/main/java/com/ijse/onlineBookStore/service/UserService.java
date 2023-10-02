package com.ijse.onlineBookStore.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.Book;
import com.ijse.onlineBookStore.entity.User;

@Service
public interface UserService {
  User createUser(User user);

  User getUserById(Long id);

  List<User> getAllUsers();

  User getUserByUsername(String name);
}
