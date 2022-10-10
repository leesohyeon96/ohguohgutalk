package com.sohyeon.ohguohgutalk.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@NoArgsConstructor
@Data
public class User {
    private String userId;
    private String userPwd;
    private String userName;
    //폰번호 ㄱㄷ
//    private int userPhoneNum;
    //주민등록번호 ㄱㄷ
//    private int userResidentNum;

}
