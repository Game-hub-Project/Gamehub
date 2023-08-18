package com.project.gamehub.dto;

import com.project.gamehub.domain.User;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String email;
    private String name;
    private String nickname;
    private String password;
    private String phoneNumber;
    private String profile;

}
