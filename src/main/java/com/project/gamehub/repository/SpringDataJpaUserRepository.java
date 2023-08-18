package com.project.gamehub.repository;

import com.project.gamehub.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaUserRepository extends JpaRepository<User, Long>, UserRepository {
    @Override
    Optional<User> findByNickname(String nickname);
    Optional<User> findByEmail(String email);
}
