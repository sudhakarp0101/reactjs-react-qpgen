import React from 'react'
import { Link } from 'react-router-dom'
function MyHeader() {
    return (
        <nav className="navbar navbar-default">
            <h1>Vasireddy Venkatadri Institute of Technology</h1>
            <h2>Question Paper Generator</h2>
            <hr />
            <div className="container">
                <div className="navbar-header">
                    <ul className="navbar-nav">
                        <Link to={"/regulationadding"} ><li>Regulation Adding</li></Link>
                        <Link to={"/questionsmenu"} ><li>Add Questions</li></Link>
                        <Link to={"/generatepaper"} ><li>Generate Paper</li></Link>
                        <Link to={"/allqustions"} ><li>All Questions</li></Link>
                        <Link to={"/allusers"} ><li>All Users</li></Link>
                        <Link to={"/createUser"} ><li>Create New User</li></Link>
                        <Link to={"/deleteUser"} ><li>Delete User</li></Link>
                        <Link to={"/updateUser"} ><li>Update User</li></Link>
                        <Link to={"/"} ><li>{
                            localStorage.getItem('auth') == null ?
                                "Login" : "Logout"}</li></Link>
                    </ul>
                </div>
            </div>
            <hr />
        </nav >
    );
}
export default MyHeader;