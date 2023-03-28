package com.niit.PizzaService.Config;

import com.niit.RabbitMQ.model.PizzaDTO;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    private RabbitTemplate rabbitTemplate;
    private DirectExchange directExchange;

    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange directExchange) {
        this.rabbitTemplate = rabbitTemplate;
        this.directExchange = directExchange;
    }

    public void sendMsgToRabbitMQ(PizzaDTO pizzaDTO){
        this.rabbitTemplate.convertAndSend(directExchange.getName(),"pizza_routing",pizzaDTO);
    }
}
