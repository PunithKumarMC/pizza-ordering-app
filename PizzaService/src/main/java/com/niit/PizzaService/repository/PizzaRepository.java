package com.niit.PizzaService.repository;

import com.niit.PizzaService.model.UserDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaRepository extends MongoRepository<UserDetails,Integer> {
    UserDetails findByUseremail(String useremail);
}
