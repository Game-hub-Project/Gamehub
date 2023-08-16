package com.project.gamehub.service;

import com.project.gamehub.domain.User;
import com.project.gamehub.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //회원가입
    public Long insertUser(User user) {
        userRepository.save(user);
        return user.getId();
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
}
