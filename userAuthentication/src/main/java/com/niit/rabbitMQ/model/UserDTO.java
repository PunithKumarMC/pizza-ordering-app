package com.niit.rabbitMQ.model;

import javax.persistence.Column;

public class UserDTO {

    private String useremail;

    private String userpassword;

    public UserDTO() {
    }

    public UserDTO(String useremail, String userpassword) {
        this.useremail = useremail;
        this.userpassword = userpassword;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }
}
