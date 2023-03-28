package com.niit.RabbitMQ.model;

import com.niit.PizzaService.model.Pizza;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class PizzaDTO {
//    private int userid;
    private String username;
    private String useremail;
    private String usercity;
    private String userpassword;
    private List<Pizza> pizzaList;

    public PizzaDTO() {
    }

    public PizzaDTO( String username, String useremail, String usercity, String userpassword, List<Pizza> pizzaList) {
//        this.userid = userid;
        this.username = username;
        this.useremail = useremail;
        this.usercity = usercity;
        this.userpassword = userpassword;
        this.pizzaList = pizzaList;
    }

//    public int getUserid() {
//        return userid;
//    }

//    public void setUserid(int userid) {
//        this.userid = userid;
//    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUsercity() {
        return usercity;
    }

    public void setUsercity(String usercity) {
        this.usercity = usercity;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public List<Pizza> getPizzaList() {
        return pizzaList;
    }

    public void setPizzaList(List<Pizza> pizzaList) {
        this.pizzaList = pizzaList;
    }
}
