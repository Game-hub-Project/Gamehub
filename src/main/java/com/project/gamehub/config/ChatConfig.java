package com.project.gamehub.config;

import com.project.gamehub.chat.StompHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@RequiredArgsConstructor
@EnableWebSocketMessageBroker
public class ChatConfig implements WebSocketMessageBrokerConfigurer {
    private final StompHandler stompHandler;

    //소켓 관련 설정
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //
        registry.addEndpoint("/ws/chat") //WebSocket 연결 uri
                .setAllowedOriginPatterns("*") //CORS 설정
                .withSockJS(); //소켓 지원하지 않은 브라우저일 경우, sockJS 사용 (websocket과 비슷한 기능을 하는 js 라이브러리)
    }

    //Stomp 사용을 위한 Message Broker 설정
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        //메세지를 받을 때 경로를 설정
        //내장 메시지 브로커 (/queue, /topic을 통해 1:1, 1:N 설정)
        //경로 앞에 /api가 붙은 경우 messageBroker가 경로를 가로챔 ex) /topic subscribe 시 실제로는 /api/topic 경로가 됨
        registry.enableSimpleBroker("/queue", "/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(stompHandler);
    }
}
