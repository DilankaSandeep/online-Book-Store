package com.ijse.onlineBookStore.service;

import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.User;

@Service
public interface UserService {
    User createUser(User user);
    User getUserById(Long id);
}
