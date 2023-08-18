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

    public User toEntity() {
        return User.builder()
                .id(id)
                .email(email)
                .name(name)
                .nickname(nickname)
                .password(password)
                .phoneNumber(phoneNumber)
                .profile(profile)
                .build();
    }
}
