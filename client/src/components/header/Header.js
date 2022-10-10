import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {login, userid} from "../../modules/UserData";

/**
 * 2022-09-21 이소현 최초 작성
 * 1. 로그인화면 만들고 로그인/회원가입쪽 보고 구현해보자
 *
 *
 * */
export default function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.UserData);


    //TODO if) session(jwt)있으면 그대로 header보이고 없으면 헤더가 다르게 보이게 여기서 소스 코드 작성ㄱ

    useEffect(() => {
            let isLogin = window.sessionStorage.getItem('login');
            if(isLogin) {
                console.log("로그인 세션 있음");
                dispatch(login(true));
                dispatch(userid(window.sessionStorage.getItem("userId")));
            }
        }, [])

    function addFriend() {
        console.log("ㄱㄷ")
    }

    function moveMain() {
        //redirect를 시켜야ㄷ되지 않을까 request같이 갓다가 에러날수도있으니까?
        //근데 일단 request가 어떤 형식인지 모르니까 navigate로 해놓ㅈ
        //session이 있는 경우:
        //session이 없는 경우:
        console.log("메인눌림")
        navigate('/');
    }

    return (
        <div style={ { height: '10%' } }>
            {userData.isLogin ? (
                    <div style={ { display: 'flex', justifyContent: 'space-between' } } >
                        <div style={ {
                            cursor: 'pointer',
                            flexGrow: 2
                        } } onClick={ addFriend }
                        >
                            친구 추가
                        </div>
                        <div
                            style={ {
                                textAlign: 'center',
                                fontWeight: "bold",
                                fontSize: '2em',
                                flexGrow: 5,
                            } }
                            onClick={ moveMain }
                        >
                        <div style={ { cursor: "pointer", width: '100px', position: "relative", left: '40%' } }>OhguOhguTalk</div>
                        </div>
                        <div style={ {
                            flexGrow: 2,
                            textAlign: 'right'
                        } }
                        >
                            로그아웃
                        </div>
                    </div>
            )
            :
            (
                <div
                    style={ {
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '2em',
                        cursor: 'pointer'
                    } }
                    onClick={ moveMain }
                >
                    OhguOhgutalk
                </div>
            )}

        </div>
    )
}
