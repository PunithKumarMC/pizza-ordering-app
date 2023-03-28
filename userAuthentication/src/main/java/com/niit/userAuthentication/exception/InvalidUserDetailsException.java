package com.niit.userAuthentication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Please provide correct username OR password!!!!")
public class InvalidUserDetailsException extends Exception{

}
