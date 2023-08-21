package com.project.gamehub.dto;

import com.project.gamehub.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private String email;

    public static UserResponseDTO of(User user) {
        return new UserResponseDTO(user.getEmail());
    }
}
