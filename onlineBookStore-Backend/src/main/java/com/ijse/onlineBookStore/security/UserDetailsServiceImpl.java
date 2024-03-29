package com.ijse.onlineBookStore.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ijse.onlineBookStore.entity.User;
import com.ijse.onlineBookStore.repository.UserRepository;



@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        User user = userRepository.findByUserName(username).orElse(null);
  

        if(user == null) {
            throw new UsernameNotFoundException("No user with this user name");
        }else{
            System.out.println(user.getUserName());
        }

        return org.springframework.security.core.userdetails.User.builder()
            .username(user.getUserName())
            .password(user.getPassword())
            .build();
    }
    
}