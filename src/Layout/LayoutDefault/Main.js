import { Outlet } from "react-router-dom"

function Main(){
    return(
        <>
        <div className="Layout-default__main">
            <Outlet/>
        </div>
        </>
    )
}

export default Main