package com.project.gamehub.domain;

import javax.persistence.*;

@Entity
public class User {

    @Id @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    private String name;
    private String nickname;
    private String password;
    private String phoneNumber;
    private String profile;
}
