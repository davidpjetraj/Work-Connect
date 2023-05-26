import { Link } from "react-router-dom";

export const Krijo = () => {
    return(
        <div className="krijosite">
            <div className="krijocube">
                <h1>Krijo Vendepune</h1>
                <div className="krijoin">
                    <input type="text" placeholder="Kompania" />
                    <input type="text" placeholder="Pozite" />
                    <input type="text" placeholder="Profesioni" />
                    <input type="text" placeholder="kualifikimi" />
                    <input type="text" placeholder="Aftesite" />
                    <input type="text" placeholder="Lokacioni" />
                </div>
                <div className="krijols">
                <div className="krijochb">
                    <input type="checkbox" id="fulltime" />
                      <label for="fulltime" > Full-Time</label> <br />
                    <input type="checkbox" id="remote" />
                      <label for="remote" > Remote</label>  <br />
                    <input type="checkbox" id="parttime" />
                      <label for="parttime" > Part-Time</label>  <br />
                </div>
                <div className="krijorange">
                    <div>
                    <h4>Numri i Vendeve te Punes</h4>
                    <input type="range" id="numriVP" min={0} max={999} />
                    <h3><output id="value"/></h3>
                    </div>
                </div>
                </div>
                <div>
                    <button>PUBLIKO</button>
                </div>
            </div>
            <div className="buttonik">
              <button><Link to='/jobs' className="loginbutton">Go Back</Link></button>
            </div>
        </div>


    )
}

/**  ?? 
newFunction()
function newFunction() {
  const value = document.querySelector("#value")
  const numriVP = document.querySelector("#numriVP")
  value.textContent = numriVP.value
  numriVP.addEventListener("input", (event) => {
    value.textContent = event.target.value
  })
}
      **/
