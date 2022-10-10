import {useNavigate} from "react-router-dom";

export default function Main() {

    const navigate = useNavigate();

    //TODO if문에 따라서 세션이 있으면 로그인화면(/login) 나오게 아니면 메인화면 그대로(/)
    return(
        <div style={ { height: '80%' } }>
            <div>
                로그인/회원가입/채팅방 등등 바뀌는 부분
                메인이빈다
            </div>
        </div>
    )


}