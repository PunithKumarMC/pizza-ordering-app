package com.niit.userAuthentication.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "userdetails")
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;
    @Column(name = "useremail")
    private String useremail;
    @Column(name = "userpassword")
    private String userpassword;


    public UserDetails(String username, String useremail, String userpassword) {
        this.useremail = useremail;
        this.userpassword = userpassword;
    }
}
