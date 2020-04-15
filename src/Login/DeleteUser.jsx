import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class DeleteUser extends React.Component {
    constructor(props) {
        super(props);
        this.postData = this.postData.bind(this);
    }

    postData(e) {
        //  this.props.history.push(`/links`);
        console.log("state", this.state)
        fetch('http://localhost:5000/api/users/', {
            method: 'DELETE',
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
                    alert('User Deleted Successfully')
                else
                    alert('No Such User')
            })
        })
    }

    render() {
        return (
            <div className="Login">
                <h1>Delete User</h1>
                <div className="tfcls">
                    <TextField id="filled-basic"
                        label="User Name"
                        variant="filled"
                        onChange={(e) => { this.setState({ Uname: e.target.value }) }} /><br />
                    <Button id="btn"
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        onClick={this.postData}>
                        Delete
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
export default DeleteUser;