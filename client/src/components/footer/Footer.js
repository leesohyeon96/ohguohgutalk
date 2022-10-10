import {useNavigate} from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    //TODO if문에 따라서 세션이 있으면 친구목록/대화방 나오게 아니면 빈화면
    return(
        <div style={ { height: '10%' } }>
            <div>
                footer

            </div>
        </div>
    )


}