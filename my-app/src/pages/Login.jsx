import {RiAppleFill, RiFacebookCircleFill,} from "react-icons/ri";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logo from "../images/logo.jpg";

export const Login = () => {
    return (
        <div className="logindiv">
            <>
        
        <img src={logo} alt="logo" className="logo" />

        <form className="loginform">
            <h1 className="log">
                Log In
            </h1>
            <input type="text" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            
            <div className="rememforg">
                <label className="remember">
                    <input type="checkbox" className="checkboxi"/>
                    Remember me </label>
                <button className="forgot">Forgot Password</button>
            </div>
            
            <button className="signin"><Link to='/app' className="loginbutton">Sign In</Link></button>
            <div className="under">
                <h2>Log In via</h2>
            <div className="iconat">
                <RiFacebookCircleFill className="iconaf"/>
                <FcGoogle className="icona"/>
                <RiAppleFill className="icona"/>
            </div>
            <div className="creatediv">
                <h5>Dosen't have an account?</h5><button className="create">Create Account</button>
            </div>
            </div>
        </form>
        </>
        </div>
    )
}