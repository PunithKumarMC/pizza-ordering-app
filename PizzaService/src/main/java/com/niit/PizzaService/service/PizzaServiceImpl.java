package com.niit.PizzaService.service;

import com.niit.PizzaService.Config.Producer;
import com.niit.PizzaService.exception.UserAlreadyExistException;
import com.niit.PizzaService.model.Pizza;
import com.niit.PizzaService.model.pizzamenu;
import com.niit.PizzaService.model.UserDetails;
import com.niit.PizzaService.repository.PizzaMenuRepository;
import com.niit.PizzaService.repository.PizzaRepository;
import com.niit.RabbitMQ.model.PizzaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService {
    @Autowired
    private PizzaRepository pizzaRepository;
    @Autowired
    private PizzaMenuRepository pizzaMenuRepository;
    @Autowired
    private Producer producer;
    @Autowired
    public PizzaServiceImpl(PizzaRepository pizzaRepository, PizzaMenuRepository pizzaMenuRepository) {
        this.pizzaRepository = pizzaRepository;
        this.pizzaMenuRepository = pizzaMenuRepository;
    }

    @Override
    public boolean registerNewUser(UserDetails userDetails) throws UserAlreadyExistException {
        boolean flag=false;
    if (pizzaRepository.findByUseremail(userDetails.getUseremail())!=null){
        throw new UserAlreadyExistException();
    }
    else {
        PizzaDTO pizzaDTO=new PizzaDTO();
        pizzaDTO.setUsername(userDetails.getUsername());
        pizzaDTO.setUserpassword(userDetails.getUserpassword());
        pizzaDTO.setUseremail(userDetails.getUseremail());
//        pizzaDTO.setUserid(userDetails.getUserid());
        pizzaDTO.setUsercity(userDetails.getUsercity());
        pizzaDTO.setPizzaList(userDetails.getPizzaList());
        producer.sendMsgToRabbitMQ(pizzaDTO);
        pizzaRepository.save(userDetails);
        flag=true;
    }
    return flag;
    }

    @Override
    public boolean savePizzaChoiceOfUser(Pizza pizza, String useremail) {
        UserDetails u1=pizzaRepository.findByUseremail(useremail);
        boolean flag=false;
        if (u1==null){
            throw new RuntimeException("User is not registered, Please enter the correct Email ID");
        }
        if(u1.getPizzaList()==null){
            u1.setPizzaList(Arrays.asList(pizza));
            pizzaRepository.save(u1);
            flag=true;
        }else {
            List<Pizza> p1=u1.getPizzaList();
            p1.add(pizza);
            u1.setPizzaList(p1);
            pizzaRepository.save(u1);
            flag=true;
        }
        return flag;
    }

    @Override
    public List<Pizza> getAllPizzaOfUser(String useremail) {
        UserDetails userDetails=pizzaRepository.findByUseremail(useremail);
        System.out.println(pizzaRepository.findAll());
        return  userDetails.getPizzaList();
    }

    @Override
    public List<pizzamenu> getMenuOfPizza() {
        System.out.println("inside get");
        return pizzaMenuRepository.findAll();
    }
}
