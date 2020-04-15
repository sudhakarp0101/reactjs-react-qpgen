/* eslint-disable */
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Redirect, NavLink } from 'react-router-dom'
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Links from "./Links.jsx";
import { CustomeRouter } from "./CustomeRouter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoggingButton from './LoggingButton'
import MyHeader from "./MyHeader";
import App from "../App";
import { browserHistory } from 'react-router'
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     margin: {
//       margin: theme.spacing(1)
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1)
//     }
//   })
// );
function Login1() {

    handleLogout() {
        localStorage.clear();
    }
    handleLogin(e) {
        //  this.props.history.push(`/links`);
        console.log("state", this.state)
        fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                if (res.status == 1) {
                    localStorage.setItem('auth', res.token);
                    //browserHistory.push("/allusers")
                    this.props.history.push("/allusers");

                }
            })
        })
    }

    // render() {
    let auth = localStorage.getItem('auth')
    return (
        <div className="Login">
            <h1>Login</h1>
            {auth != null && <Button id="btn"
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                onClick={this.handleLogout}>
                Logout
          </Button>
            }
            {(auth == null) &&
                <div className="tfcls">
                    <TextField id="filled-basic"
                        label="User Name"
                        variant="filled"
                        onChange={(e) => { this.setState({ Uname: e.target.value }) }} /><br />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={(e) => { this.setState({ Password: e.target.value }) }}
                    />
                    <br />

                    <Button id="btn"
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        onClick={this.handleLogin}>
                        Login
            </Button>
                    <Button id="btn"
                        variant="contained"
                        size="large"
                        color="primary"
                    // className={classes.margin}
                    >
                        Clear
          </Button>
                </div>
            }

        </div>
    );
    //}
}
export default Login;