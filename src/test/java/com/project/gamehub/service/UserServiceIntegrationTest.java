package com.project.gamehub.service;

import com.project.gamehub.domain.User;
import com.project.gamehub.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@Transactional
public class UserServiceIntegrationTest {

    @Autowired UserService userService;
    @Autowired UserRepository userRepository;

    @Test
    void join() {
        //given
        User user = new User();
        user.setEmail("test1@test.com");
        user.setName("spring");
        user.setNickname("hello");
        user.setPassword("test1234");
        user.setPhoneNumber("01011112222");
        user.setProfile("test.png");

        //when
        Long saveId = userService.insertUser(user);

        //then
        User findUser = userService.findOne(saveId).get();
        assertThat(user.getName()).isEqualTo(findUser.getName());
    }

    @Test
    void checkDuplicateUser() {
        User user1 = new User();
        user1.setEmail("test3@test.com");

        User user2 = new User();
        user2.setEmail("test4@test.com");

        userService.insertUser(user1);
        IllegalStateException e = assertThrows(IllegalStateException.class, () -> userService.insertUser(user2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
    }
}
