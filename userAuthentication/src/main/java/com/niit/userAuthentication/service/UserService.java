package com.niit.userAuthentication.service;

import com.niit.userAuthentication.exception.InvalidUserDetailsException;
import com.niit.userAuthentication.model.UserDetails;

import java.util.List;

public interface UserService {
    UserDetails saveUserDetails(UserDetails userDetails);

    List<UserDetails> getAllUserDetails();

    UserDetails authenticateUser(String useremail, String password) throws InvalidUserDetailsException;
}
