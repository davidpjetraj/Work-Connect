import { BiHome, BiUserCircle } from "react-icons/bi"
import { FiSettings } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { Link , useResolvedPath , useMatch, resolvePath } from "react-router-dom";

export const Sidebar = () => {
    return(



        <div className="sidebari">
            <ul >
                <CustomLink to='/app' ><li className="buttoni">< BiHome className="icona" />Home</li></CustomLink>
                <CustomLink to='/users' ><li className="buttoni">< BiUserCircle className="icona" />Users</li></CustomLink>
                <CustomLink to='/jobs' ><li className="buttoni">< MdPayment className="icona" />Jobs</li></CustomLink>
                <CustomLink to='/setting' ><li className="buttoni">< FiSettings className="icona" />Settings</li></CustomLink>
                
            </ul>
        </div>
    )
}
function CustomLink({ to , children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname , end:true})

    return(
        <li className={isActive ? "active": "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}