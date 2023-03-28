package com.niit.userAuthentication.service;

import com.niit.userAuthentication.model.UserDetails;

import java.util.Map;

public interface SecurityTokenGenerator {
    Map<String,String> generateToken(UserDetails userDetails);
}
