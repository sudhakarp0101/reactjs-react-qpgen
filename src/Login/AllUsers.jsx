import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class AllUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
        //  this.props.history.push(`/links`);
        console.log("state", this.state)
        fetch('http://localhost:5000/api/users/', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem('auth')
            },
        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                if (res.status == 1)
                    this.setState({ users: res.data })
                else
                    alert('Unable to get data')
            })
        })
    }

    render() {
        return (
            <div className="Login">
                <h1>All Users</h1>
                <table border="1" align="center">
                    <tr><th width="30px">User</th><th width="20px">Priority</th></tr>
                    {
                        this.state.users.map(user =>
                            <tr>
                                <td>{user.Uname}</td>
                                <td>{user.Priority}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        );
    }
}
export default AllUsers;