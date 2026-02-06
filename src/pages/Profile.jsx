import Header from "../components/Header";

function Profile(){
    
    const headerItems = [{title:'Home',path:'/'},{title:'Dashboard',path:'/dashboard'}]
    
    return(
        <>
            <Header items={headerItems}></Header>
            <h2>Profile</h2>
        </>
        
    
    )
}

export default Profile;