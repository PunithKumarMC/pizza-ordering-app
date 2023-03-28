package com.niit.PizzaService.controller;

import com.niit.PizzaService.exception.UserAlreadyExistException;
import com.niit.PizzaService.model.Pizza;
import com.niit.PizzaService.model.UserDetails;
import com.niit.PizzaService.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PizzaController {
    private PizzaService pizzaService;

    @Autowired
    public PizzaController(PizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }
    @PostMapping("/api/v2/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDetails userDetails) throws UserAlreadyExistException {
        return new ResponseEntity<>(pizzaService.registerNewUser(userDetails), HttpStatus.CREATED);
    }
    @PutMapping("/api/v2/pizza/addpizza/{email}")
    public ResponseEntity<?> addPizza(@RequestBody Pizza pizza, @PathVariable String email){
        return new ResponseEntity<>(pizzaService.savePizzaChoiceOfUser(pizza,email),HttpStatus.CREATED);
    }
    @GetMapping("/api/v2/pizza/getpizza/{email}")
    public ResponseEntity<?> getPizzaOfUser(@PathVariable String email){
        return new ResponseEntity<>(pizzaService.getAllPizzaOfUser(email),HttpStatus.OK);
    }
    @GetMapping("/api/v2/getpizzamenu")
    public ResponseEntity<?> getPizzaMenu(){
        return new ResponseEntity<>(pizzaService.getMenuOfPizza(),HttpStatus.OK);
    }

}
