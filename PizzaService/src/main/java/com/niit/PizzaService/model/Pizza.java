package com.niit.PizzaService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Pizza {
    @Id
    private int pizzaid;
    private String pizzaname;
    private String pizzatype;
    private double pizzaprice;
}
