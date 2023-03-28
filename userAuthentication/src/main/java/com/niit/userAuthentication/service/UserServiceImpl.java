package com.niit.userAuthentication.service;

import com.niit.userAuthentication.exception.InvalidUserDetailsException;
import com.niit.userAuthentication.model.UserDetails;
import com.niit.userAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService{
    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails saveUserDetails(UserDetails userDetails) {
        return (UserDetails) userRepository.save(userDetails);
    }

    @Override
    public List<UserDetails> getAllUserDetails() {
        return userRepository.findAll();
    }

    @Override
    public UserDetails authenticateUser(String useremail, String userpassword) throws InvalidUserDetailsException {
        UserDetails user=userRepository.findByUseremailAndUserpassword(useremail,userpassword);
        if (user==null){
            throw  new InvalidUserDetailsException();
        }else {
            System.out.println("inside authenticateUser");
            return userRepository.findByUseremailAndUserpassword(useremail,userpassword);
        }
    }
}
