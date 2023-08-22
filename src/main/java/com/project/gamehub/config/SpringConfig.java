package com.project.gamehub.config;

import com.project.gamehub.repository.*;
import com.project.gamehub.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class SpringConfig {
    private final UserRepository userRepository;

    @Bean
    public UserService userService() {
        return new UserService(userRepository);
    }
}
