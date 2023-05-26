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
                    <div>
                    <h4>Mosha</h4>
                    <input type="range" id="mosha" min={18} max={65} />
                    <h3>l<output id="value1"/></h3></div>
                </div>
                </div>
                <div>
                    <button>PUBLIKO</button>
                </div>
            </div>
        </div>


    )
}

const value = document.querySelector("#value")
const numriVP = document.querySelector("#numriVP")
value.textContent = numriVP.value
numriVP.addEventListener("input", (event) => {
  value.textContent = event.target.value
})

const value1 = document.querySelector("#value1")
const mosha = document.querySelector("#mosha")
value1.textContent = mosha.value1
mosha.addEventListener("input", (event) => {
  value1.textContent = event.target.value1
})