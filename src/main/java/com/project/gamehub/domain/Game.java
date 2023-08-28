package com.project.gamehub.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
public class Game {

    @Id
    @Column(name = "game_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private String content;

    private String gameImage;

    @Builder
    public Game(Long id, String title, String genre, String content, String gameImage) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.content = content;
        this.gameImage = gameImage;
    }

}
