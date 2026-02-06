import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import Header from "../components/Header"

function Home(){

    const {isAuthenticated} = useContext(AuthContext)

    const items = [{title: "Dashboard",path: "/dashboard"},{title: "profile",path: "/profile"}]

    return(
        <div>
            <Header items={items}></Header>
            <h2>Home</h2>
            {isAuthenticated? <span className="text-2xl text-green-800">"ESTAS LOGUEADO"</span> : <span className="text-2xl text-red-800">"NO ESTAS LOGUEADO"</span>  }
        </div>
            
    )

}

export default Home