import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"

/*
    Item list se encarga de renderizar todos los path que va a tener el header,
    maneja si el usuario esta logueado para mostrar boton de login/logout
*/

function ItemsList({items}){

    const liItems = items.map(item => {
        return (<li key={item.path}><Link to={item.path}>{item.title}</Link></li>)
    })

    return(
        <div className="flex gap-4">
            <ul className="flex gap-4">
                {liItems}
            </ul>
            <BotonLoginOut></BotonLoginOut>
        </div>
    )
}


//muestra boton de log in o logOut depoendiendo si el usuario esta autentificado
function BotonLoginOut(){
    
    const {isAuthenticated,logOut} = useContext(AuthContext);

    
    if(isAuthenticated){
        return(
            <button onClick={() => {
                console.log('logOut')
                logOut()
            }}>LogOut</button>
        )
    }
        
    return(
        <Link to={'/login'}>
            <button >LogIn</button>
        </Link>
        
    )
}

//items = [{title: 'dashboard', path:'/dashboard' }]

function Header({items}){
    return(
        <nav className="bg-blue-800 py-3 px-6">
            <div className="flex text-white justify-between">
                <h1>App name</h1>
                <ItemsList items={items}></ItemsList>
            </div>
        </nav>
    )

}

export default Header