package com.ijse.onlineBookStore.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.User;
import com.ijse.onlineBookStore.repository.UserRepository;
import com.ijse.onlineBookStore.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    public UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        System.out.println("i'm in UserserviceImpl getByUserId");
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public List<User> getAllUsers() {
        System.out.println("i'm in UserserviceImpl");
        return userRepository.findAll();
    }

    @Override
    public User getUserByUsername(String name) {
        return userRepository.findByUserName(name).orElse(null);
    }

}
