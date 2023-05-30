import React from "react"
import { BiSearch } from "react-icons/bi"
import Ubtlogo from "../images/Ubtlogo.png";
import { Link } from "react-router-dom";

export const Home = () => {
    return( 
        <div>
        <div className="searchi">
            <div className="searchdivi">
                <input type="search" placeholder="Search ... " /> < BiSearch className="searchicon" />
            </div>
            <div className="buttonat">
                <button><Link to="/jobs">Kerkoni Pune</Link></button>
                <button><Link to="/krijo">Krijo Vendepune</Link></button>
            </div>
        </div>
        <div className="maini">
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
            <div className="kubi">
                <h1>UBT</h1>
                <img src={Ubtlogo} alt="logo" className="logo" />
                <div>
                <h4>Profesioni : IT</h4>
                <h4>Vende te lire : 10</h4>
                <h4>Kualifikimi : BSc Computer Science</h4>
                </div>
                <button>Apliko</button>
            </div>
        </div>
        </div>
    )
}