package com.niit.PizzaService.repository;

import com.niit.PizzaService.model.pizzamenu;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PizzaMenuRepository extends MongoRepository<pizzamenu,Integer> {

}
