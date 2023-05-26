import React from "react";
import addidas from "../images/addidas.png";
import apple from "../images/apple.png";
import figma from "../images/figma.png";
import instagram from "../images/instagram.png";
import Nike from "../images/Nike.png";
import twitter from "../images/twitter.png";
import { Link } from "react-router-dom";

export const Rate = () => {
    return(
        <div>
            <div className="ratearena">
                <div className="ratebox">
                <img src={figma} alt="figma" className="figmalogo" />
                <h3>FIGMA</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
                <div className="ratebox">
                <img src={instagram} alt="instagram" className="logot" />
                <h3>INSTAGRAM</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
                <div className="ratebox">
                <img src={apple} alt="apple" className="logot" />
                <h3>APPLE</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
                <div className="ratebox">
                <img src={Nike} alt="nike" className="logot" />
                <h3>NIKE</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
                <div className="ratebox">
                <img src={addidas} alt="adidas" className="logot" />
                <h3>ADIDAS</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
                <div className="ratebox">
                <img src={twitter} alt="twitter" className="logot" />
                <h3>TWITTER</h3>
                  <div class="rating">
                    <input type="radio" id="star5" name="rate" value="5"/>
                    <label for="star5" title="text"></label>
                    <input type="radio" id="star4" name="rate" value="4"/>
                    <label for="star4" title="text"></label>
                    <input checked="" type="radio" id="star3" name="rate" value="3"/>
                    <label for="star3" title="text"></label>
                    <input type="radio" id="star2" name="rate" value="2"/>
                    <label for="star2" title="text"></label>
                    <input type="radio" id="star1" name="rate" value="1"/>
                    <label for="star1" title="text"></label>
                  </div>
                </div>
            </div>
            <div className="ratecomment">
                <h5>LEAVE A COMMENT</h5>
                <textarea placeholder="WRITE YOUR COMMENT HERE!" className="leavecomment"/>
            </div>
            <div className="buttonatrate">
            <button className="buttoni">RATE </button>
            <Link to="/app" className="buttoni">Home</Link>
            </div>
        </div>
    )
}