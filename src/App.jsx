import { BrowserRouter,Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Login from "./pages/LogIn"
import Home from "./pages/Home"

import ProtectedRoute from "./auth/ProtectedRoute"
import AuthProvider from "./contexts/authProvider"

function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute ><Dashboard/></ProtectedRoute>}></Route>
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
    

  )
}

export default App
