import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="logindiv">
            <>
        <form className="loginform">

                <div className="icona"><RiAccountCircleFill/></div>
            <input type="text" placeholder="Username ..." />
            <input type="password" placeholder="Password ..." />
            <button type="submit"><Link to='/app' className="loginbutton">Login</Link></button>
        </form>
        </>
        </div>
    )
}