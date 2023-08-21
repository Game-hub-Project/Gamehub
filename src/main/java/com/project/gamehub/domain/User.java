package com.project.gamehub.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
public class User extends Timestamped {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String phone_number;

    @Column(nullable = false)
    private String profile;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Builder
    public User(Long id, String email, String name, String nickname, String password, String phone_number, String profile, Authority authority) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.password = password;
        this.phone_number = phone_number;
        this.profile = profile;
        this.authority = authority;
    }
}
