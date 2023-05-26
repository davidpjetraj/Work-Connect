import { Link } from "react-router-dom"

export const Job = () => {
    return(
        <div>
            <div className="jobpos">
            <div className="jobcube">
                
                <h2>Kerkoni Pune</h2>
                <div className="kerkofield">
                    <input type="text" placeholder="Kompania" />
                    <input type="text" placeholder="Profesioni" />
                    <input type="text" placeholder="Lokacioni" /> 
                </div>
                            <button className="searchb">Search</button>
                
                <h2>Rezultatet</h2>
                <div className="rezultatetgap">
              <div className="rezultatet">
                    <input type="text" placeholder="Swisscom   ||      Software Enginieer   ||  Gjakove" />
                            <button>Apliko</button>
              </div>
              <div className="rezultatet">
                    <input type="text" placeholder="Swisscom   ||      Software Enginieer   ||  Gjakove" />
                            <button>Apliko</button>
              </div>
              <div className="rezultatet">
                    <input type="text" placeholder="Swisscom   ||      Software Enginieer   ||  Gjakove" />
                            <button>Apliko</button>
              </div>
              <div className="rezultatet">
                    <input type="text" placeholder="Swisscom   ||      Software Enginieer   ||  Gjakove" />
                            <button>Apliko</button>
              </div>
                </div>
            </div>
            </div>
            <div className="krijovp">
                <button><Link to='/krijo' className="loginbutton">Krijo Vendepune</Link></button>
            </div>
        </div>
    )
}