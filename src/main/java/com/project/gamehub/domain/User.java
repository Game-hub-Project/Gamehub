package com.project.gamehub.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class User {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String name;
    private String nickname;
    private String password;
    private String phoneNumber;
    private String profile;

    @Builder
    public User(
            Long id,
            String email,
            String name,
            String nickname,
            String password,
            String phoneNumber,
            String profile
    ) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.profile = profile;
    }
}
