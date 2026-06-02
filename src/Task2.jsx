function Task2(props) {
    const welcome = <h2 className="wel-msg">Welcome {props.username}</h2>
    const login = <h2 className="login-msg">Please Login</h2>
    return(props.isLoggedIn?welcome : login);  
    
    <div className="task2-container">
    <input type="text" placeholder="Enter username"></input>
    <input type="password" placeholder="Enter password"></input>
    <button>Login</button>
    </div>
}
export default Task2;