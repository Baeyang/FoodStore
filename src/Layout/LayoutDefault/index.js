    import './LayoutDefault.css';
    import Footer from "./Footer";
    import Main from './Main';
    import Header from './Header';
    import { useSelector } from "react-redux";
    import { getCookie } from "../../helper/Cookie";

    function LayoutDefault(){
        const token = getCookie('token')
        const isLogin = useSelector((state) => state.loginReducer)
        return(
            <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            </>
        )
    }

    export default LayoutDefault