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

    //전체 회원 조회
     public List<User> findUsers() {
        return userRepository.findAll();
     }

    //개별 회원 조회(ID로)
    public Optional<User> findById(Long userId) {
        return userRepository.findById(userId);
    }

    //개별 회원 조회(이메일로)
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    //회원정보 수정, 삭제 추가하기
}
