package com.project.gamehub.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class ChatRoomDTO {

    private String roomId;
    private String roomName;

    public static ChatRoomDTO create(String name) {
        ChatRoomDTO room = new ChatRoomDTO();
        room.roomId = UUID.randomUUID().toString();
        room.roomName = name;
        return room;
    }
}
