package com.niit.userAuthentication.controller;

import com.niit.userAuthentication.exception.InvalidUserDetailsException;
import com.niit.userAuthentication.model.UserDetails;
import com.niit.userAuthentication.service.SecurityTokenGenerator;
import com.niit.userAuthentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin
@RestController
public class UserController {
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;
    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    @PostMapping("/api/v1/register")
    public ResponseEntity<?> insertUDetails(@RequestBody UserDetails userDetails) {
        return new ResponseEntity<>(userService.saveUserDetails(userDetails), HttpStatus.CREATED);
    }

    @GetMapping("/api/v1/getAllUsers")
    public ResponseEntity<?> getAllUDetails() {
        return new ResponseEntity<>(userService.getAllUserDetails(), HttpStatus.OK);
    }

    @PostMapping("/api/v1/loginAuthenticateUser")
    public ResponseEntity<?> getAuthenticatedUDetails(@RequestBody UserDetails userDetails) {
        Map<String, String> map = null;
        UserDetails userDetails1 = null;
        try {
            userDetails1 = userService.authenticateUser(userDetails.getUseremail(), userDetails.getUserpassword());
            if (userDetails.getUseremail().equals(userDetails1.getUseremail())) {
                map = securityTokenGenerator.generateToken(userDetails);
            }
        } catch (InvalidUserDetailsException e) {
            throw new RuntimeException(e);
        } catch (Exception e) {
            return new ResponseEntity<>("Try after some time!!!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
