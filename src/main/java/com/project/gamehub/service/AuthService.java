package com.project.gamehub.service;

import com.project.gamehub.domain.RefreshToken;
import com.project.gamehub.domain.User;
import com.project.gamehub.dto.TokenDTO;
import com.project.gamehub.dto.TokenRequestDTO;
import com.project.gamehub.dto.UserRequestDTO;
import com.project.gamehub.dto.UserResponseDTO;
import com.project.gamehub.jwt.TokenProvider;
import com.project.gamehub.repository.RefreshTokenRepository;
import com.project.gamehub.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    //회원가입
    @Transactional
    public UserResponseDTO signup(UserRequestDTO userRequestDTO) {
        if(userRepository.existsByEmail(userRequestDTO.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        User user = userRequestDTO.toUser(passwordEncoder);
        return UserResponseDTO.of(userRepository.save(user));
    }

    //로그인
    @Transactional
    public TokenDTO login(UserRequestDTO userRequestDTO) {
        //ID, PW를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = userRequestDTO.toAuthentication();

        //사용자 비밀번호를 체크
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        //인증 정보를 통해 JWT 토큰 생성
        TokenDTO tokenDTO = tokenProvider.generateTokenDto(authentication);

        //RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDTO.getRefreshToken())
                .build();

        refreshTokenRepository.save(refreshToken);

        //토큰 발급
        return tokenDTO;
    }

    //재발급
    @Transactional
    public TokenDTO reissue(TokenRequestDTO tokenRequestDTO) {
        //refreshToken 검증
        if(!tokenProvider.validateToken(tokenRequestDTO.getRefreshToken())) {
            throw new RuntimeException("Refresh Token이 유효하지 않습니다.");
        }

        //AccessToken에서 User ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDTO.getAccessToken());

        //User ID를 기반으로 RefreshToken 값 가져오기
        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃된 사용자입니다."));

        //RefreshToken이 일치하는지 검사
        if(!refreshToken.getValue().equals(tokenRequestDTO.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        //새로운 토큰 생성
        TokenDTO tokenDTO = tokenProvider.generateTokenDto(authentication);

        //저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDTO.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        //토큰 발급
        return tokenDTO;
    }
}
