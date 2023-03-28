package com.niit.PizzaService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.annotation.processing.Generated;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class UserDetails {
    @Id
    private String useremail;
    private String username;
    private String usercity;
    private String userpassword;
    private List<Pizza> pizzaList;
}
