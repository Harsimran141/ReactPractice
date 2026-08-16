function Header(props){
    return(
        <div>
          <h2>React App</h2>
        <h1>Welcome To Header Section</h1>
          <h2>Email:-{props.email}|{props.phone}</h2>
   
      
        </div>

    )
}
export default Header;