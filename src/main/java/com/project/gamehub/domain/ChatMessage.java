package com.project.gamehub.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
public class ChatMessage {

    @Id
    @Column(name = "message_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private ChatRoom chatRoom;

    @Builder
    public ChatMessage(Long id, String writer, String content, ChatRoom chatRoom) {
        this.id = id;
        this.writer = writer;
        this.content = content;
        this.chatRoom = chatRoom;
    }
}
