package com.project.gamehub.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "refresh_token")
@Entity
public class RefreshToken extends Timestamped{

    @Id
    @Column(name = "rt_key")
    //UserId
    private String key;

    @Column(name = "rt_value")
    //Id의 refresToken 값
    private String value;

    @Builder
    public RefreshToken(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public RefreshToken updateValue(String token) {
        this.value = token;
        return this;
    }
}
