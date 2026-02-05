import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

function Home(){

    const {logOut} = useContext(AuthContext)

    return(
    
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li>   
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    
                </ul>
            </nav>

            <button className="bg-red-800 text-white hover:cursor-pointer" onClick={() => {
                logOut()
                console.log('logOut')
                console.log(localStorage)
            }}>LogOut</button>
        </div>
        
    )

}

export default Home