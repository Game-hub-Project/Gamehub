package com.project.gamehub.controller;

import com.project.gamehub.domain.User;
import com.project.gamehub.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

}
