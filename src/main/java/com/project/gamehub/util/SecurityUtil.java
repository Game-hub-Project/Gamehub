package com.project.gamehub.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Slf4j
public class SecurityUtil {

    private SecurityUtil() {}

    //SecurityContext에 정보가 저장되는 시점
    //Request가 들어올 때 JwtFilter의 doFilter에 저장
    public static Long getCurrentUserId() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(authentication == null || authentication.getName() == null) {
            throw new RuntimeException("Security Context에 정보가 없습니다.");
        }

        return Long.parseLong(authentication.getName());
    }
}
