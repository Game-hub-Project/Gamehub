package com.project.gamehub.controller;

import com.project.gamehub.domain.User;
import com.project.gamehub.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/join")
    public String join() {
        return "test";
    }

    @PostMapping("/api/join")
    public void join(@RequestBody User user) {
        userService.join(user);
    }

}
