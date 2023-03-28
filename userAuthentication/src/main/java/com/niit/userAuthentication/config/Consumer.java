package com.niit.userAuthentication.config;

import com.niit.rabbitMQ.model.UserDTO;
import com.niit.userAuthentication.model.UserDetails;
import com.niit.userAuthentication.service.UserServiceImpl;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private UserServiceImpl userService;

    @RabbitListener(queues = "pizza_queue")
    public void getDataFromPizzaRabbitMQService(UserDTO userDTO) {
        UserDetails userDetails=new UserDetails();
        userDetails.setUseremail(userDTO.getUseremail());
        userDetails.setUserpassword(userDTO.getUserpassword());
        userService.saveUserDetails(userDetails);
    }
}
