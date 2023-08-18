package com.project.gamehub.service;

import com.project.gamehub.domain.User;
import com.project.gamehub.dto.UserDTO;
import com.project.gamehub.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    //회원가입
    public String join(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(userDTO.toEntity());
        return userDTO.getEmail();
    }

    private void validateDuplicateUser(User user) {
        userRepository.findByEmail(user.getEmail())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    //전체 회원 조회
     public List<User> findUsers() {
        return userRepository.findAll();
     }

    //개별 회원 조회(ID로)
    public Optional<User> findOne(Long userId) {
        return userRepository.findById(userId);
    }

    //개별 회원 조회(이메일로)
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
