
import Header from "../components/Header";


function Dashboard(){
    const headerItems = [{title:"Home",path:"/"},{title:"Profile",path:"/profile"}]
    
    return(
        <>
            <Header items={headerItems}></Header>    
            <h2>Dashboard</h2>
        </>
    )
}

export default Dashboard;