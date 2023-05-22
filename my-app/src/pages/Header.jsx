
import { RiAccountCircleFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";

export const Header = () => {
    return(
        <header className="headeri">
          <div className="firstdiv">
            <div className="name">
                <h1>UBT - Market</h1>
            </div>
          </div>
          <div>
            <div className="useri">
                <h3>Shitesi 1</h3>
                <button><RiAccountCircleFill className="i"/></button>
                <button><BiLogIn className="i"/></button>
            </div>
           </div>
        </header>
    )
}