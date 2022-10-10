import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";

function Layout() {

    //if) session 있으면 [jwt나?] /으로 아니면 /login으로 가게 하기
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )

}

export default Layout;