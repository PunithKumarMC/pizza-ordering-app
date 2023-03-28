package com.niit.PizzaService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "Product details already exists Please try with different data")
public class UserAlreadyExistException extends Exception{

}
