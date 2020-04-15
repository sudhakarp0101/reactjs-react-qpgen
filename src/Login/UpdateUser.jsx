import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
    }

    postData(e) {
        //  this.props.history.push(`/links`);
        console.log("state", this.state)
        fetch('http://localhost:5000/api/users/', {
            method: 'PATCH',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('auth')
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                if (res.status == 1)
                    alert('User Updated Successfully')
                else
                    alert('No Such User')
            })
        })
    }

    render() {
        return (
            <div className="Login">
                <h1>Update User</h1>
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
                    <TextField
                        id="filled-priority-input"
                        label="Priority"
                        type="priority"
                        autoComplete="current-priority"
                        variant="filled"
                        onChange={(e) => { this.setState({ Priority: e.target.value }) }}
                    />
                    <br />
                    <Button id="btn"
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        onClick={this.postData}>
                        Update
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
            </div>
        );
    }
}
export default UpdateUser;