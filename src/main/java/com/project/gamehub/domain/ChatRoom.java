package com.project.gamehub.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ChatRoom {

    @Id
    @Column(name = "room_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roomName;

    @Builder
    public ChatRoom(String roomName) {
        this.roomName = roomName;
    }

}
