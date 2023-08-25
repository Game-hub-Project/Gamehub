package com.project.gamehub.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message {
    public enum MessageType {
        ENTER, TALK
    }

    private MessageType type;
    private String roomId;
    private String Sender;
    private String message;
}
