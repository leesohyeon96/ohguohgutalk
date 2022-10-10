import {useNavigate} from "react-router-dom";

export default function MemberLogin() {

    const navigate = useNavigate();

    return(
        <>
            <div>
                <label>ID : </label>
                <input type="text" name="memberId"/>
                <label>Password : </label>
                <input type="password" name="memberPassword"/>
            </div>
        </>
    )


}