package com.niit.userAuthentication.repository;

import com.niit.userAuthentication.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface UserRepository extends JpaRepository<UserDetails,Integer> {
    UserDetails findByUseremailAndUserpassword(String useremail,String userpassword);
}
