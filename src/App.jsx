import { BrowserRouter,Routes,Route} from "react-router-dom"
import useToken from "./auth/useToken"

import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Login from "./pages/LogIn"
import Home from "./pages/Home"

import ProtectedRoute from "./auth/ProtectedRoute"
import AuthProvider from "./contexts/authProvider"

function App() {

  const {token,setToken} = useToken()

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login setToken={setToken}></Login>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute token={token}><Dashboard/></ProtectedRoute>}></Route>
          <Route path="/profile" element={<ProtectedRoute token={token}><Profile/></ProtectedRoute>}></Route>
        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
    

  )
}

export default App
