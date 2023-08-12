package com.project.gamehub;

import com.project.gamehub.repository.UserRepository;

public class SpringConfig {

    private final UserRepository userRepository;

    public SpringConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


}
