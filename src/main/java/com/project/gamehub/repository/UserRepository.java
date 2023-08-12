package com.project.gamehub.repository;

import com.project.gamehub.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User user);
    Optional<User> findById(Long id);
    Optional<User> findByNickname(String nickname);
    List<User> findAll();
}
