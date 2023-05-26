import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export const SignUp = () => {
    return (
        <div className="logindiv">
            <>
        
        <img src={logo} alt="logo" className="logo" />

        <form className="loginform">
            <h1 className="log">
                Sign Up
            </h1>
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            
            <button className="signin"><Link to='/' className="loginbutton">Sign Up</Link></button>
            
        </form>
        </>
        </div>
    )
}