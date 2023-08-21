package com.project.gamehub.dto;

import com.project.gamehub.domain.Authority;
import com.project.gamehub.domain.User;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestDTO {

    private Long id;
    private String email;
    private String name;
    private String nickname;
    private String password;
    private String phone_number;
    private String profile;

    public User toUser(PasswordEncoder passwordEncoder) {
        return User.builder()
                .email(email)
                .name(name)
                .nickname(nickname)
                .password(passwordEncoder.encode(password))
                .phone_number(phone_number)
                .profile(profile)
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
