package com.project.gamehub.controller;

import com.project.gamehub.dto.TokenDTO;
import com.project.gamehub.dto.TokenRequestDTO;
import com.project.gamehub.dto.UserRequestDTO;
import com.project.gamehub.dto.UserResponseDTO;
import com.project.gamehub.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity<UserResponseDTO> signup(@RequestBody UserRequestDTO userRequestDTO) {
        return ResponseEntity.ok(authService.signup(userRequestDTO));
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<TokenDTO> login(@RequestBody UserRequestDTO userRequestDTO) {
        return ResponseEntity.ok(authService.login(userRequestDTO));
    }

    //재발급
    @PostMapping("/reissue")
    public ResponseEntity<TokenDTO> reissue(@RequestBody TokenRequestDTO tokenRequestDTO) {
        return ResponseEntity.ok(authService.reissue(tokenRequestDTO));
    }
}
