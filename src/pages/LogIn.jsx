import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";

import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

function Login(){

    const {register,handleSubmit,formState:{errors}} = useForm()
    //const location = useLocation()
    const navigate = useNavigate()

    const {setToken} = useContext(AuthContext)

    //const from = location.state?.from?.pathname || "/";


    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)})
            .then(data => data.json())
    }

    
    const onSubmit =  async (data) => {
        console.log(data)
        const UserToken = await loginUser(data);
        setToken(UserToken.token);
        
        //vuelvo a la ruta original
        navigate(`/`)
    }



    return(
        <div className="bg-white w-9/10 mx-auto md:w-4/10 p-5 space-y-3 rounded-lg my-10">
            <h2 className="text-black text-xl font-semibold text-center">Login</h2>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="p-1.5 border-2 border-gray-100 rounded-xl" {...register('email', {required: "*this field is required"})} placeholder="Email"></input>
                {errors.email && <p className="text-red-600">{errors.email.message}</p>}

                <input type="password" className="p-1.5 border-2 border-gray-100 rounded-xl" {...register('password', {required: "*this field is required"})} placeholder="Password"></input>
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                
                <input type="submit" className="bg-blue-900 text-white py-1.5 rounded-lg hover:bg-blue-950 hover:cursor-pointer active:bg-amber-500" value={'LogIn'}></input>


            </form>
        </div> 
    )
}

export default Login