import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {login, userid} from "../../modules/UserData";
import {useDispatch, useSelector} from "react-redux";

export default function Main() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(state => state.UserData);


    useEffect(() => {
        let isLogin = window.sessionStorage.getItem('login');
        if(isLogin) {
            console.log("로그인 세션 있음");
            dispatch(login(true));
            dispatch(userid(window.sessionStorage.getItem("userId")));
        }
    }, [])

    //TODO if문에 따라서 세션이 있으면 로그인화면(/login) 나오게 아니면 메인화면 그대로(/)
    return(
        <div style={ { height: '80%' } }>
            {userData.isLogin? (
                <div>
                    (세션이 있음)
                    로그인/회원가입/채팅방 등등 바뀌는 부분
                </div>

            )
            :
            (
                <div>로그인화면이 있어야함</div>
            )}
        </div>
    )


}