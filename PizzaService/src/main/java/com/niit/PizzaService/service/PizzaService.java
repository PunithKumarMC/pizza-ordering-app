package com.niit.PizzaService.service;

import com.niit.PizzaService.exception.UserAlreadyExistException;
import com.niit.PizzaService.model.Pizza;
import com.niit.PizzaService.model.pizzamenu;
import com.niit.PizzaService.model.UserDetails;

import java.util.List;

public interface PizzaService {
    boolean registerNewUser(UserDetails userDetails) throws UserAlreadyExistException;
    boolean savePizzaChoiceOfUser(Pizza pizza,String useremail);
    List<Pizza> getAllPizzaOfUser(String useremail);
    List<pizzamenu> getMenuOfPizza();
}
