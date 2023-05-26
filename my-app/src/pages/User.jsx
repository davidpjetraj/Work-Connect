import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const User = () => {
    return(
        <div className="usermain">
            <div className="userbox">
                <div className="first">
                    <FaUserCircle className="fotoja" /> <br /><br />
                    <h5 className="bold">Personal:</h5>
                    <h5>Full Name: Name Surname</h5>
                    <h5>Birthday:01/01/2003</h5> <br />
                    <h5 className="bold">Contact</h5>
                    <h5>Email: user@gmail.com</h5>
                    <h5>Phone: 044 444 444</h5> <br />
                    <h5 className="bold">Top Skills:</h5>
                    <h5>Node.js Object-Oriented</h5>
                    <h5>Programming(OOP)</h5>
                    <h5>MySQL</h5>
                </div>
                <div className="inputat">
                    <input type="text" placeholder="University" />
                    <input type="text" placeholder="Higher Education" />
                    <input type="text" placeholder="Experience"/>
                </div>
            </div>
            <div className="userrate">
                <Link to='/rate' className="userratebutton" >Rate Jobs</Link>
            </div>
        </div>
    )
}