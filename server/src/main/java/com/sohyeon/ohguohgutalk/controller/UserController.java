package com.sohyeon.ohguohgutalk.controller;

import com.sohyeon.ohguohgutalk.model.dto.User;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    //@Slf4j 없이도 logger의 기능을 사용할 수 있게 해주는 것
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private RedisTemplate<String, User> userRedisTemplate;

    @PostMapping("/login")
    public ResponseEntity<Integer> login(@RequestBody User user) {
        log.info("Login Info: [{}]", user);

        //opsForValue:  String을 쉽게 Serialize/Deserialize 해주는 Interface
        ValueOperations<String, User> vos = userRedisTemplate.opsForValue();

        if(!userRedisTemplate.hasKey(user.getUserId() + ":info")) {
            return new ResponseEntity<>(100, HttpStatus.OK);
        } else if(!vos.get(user.getUserId() + "info").getUserPwd().equals(user.getUserPwd())) {
            return new ResponseEntity<>(200, HttpStatus.OK);
        }
        return ResponseEntity.ok().build();
    }


}
