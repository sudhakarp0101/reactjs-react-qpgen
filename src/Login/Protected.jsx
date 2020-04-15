import React from 'react';
import { Redirect } from 'react-router-dom'
function Protected(props) {
    const Cmp = props.cmp;
    var auth = localStorage.getItem('auth');
    return <div>{auth != null ? <Cmp /> : <Redirect to="login" />} </div>
}
export default Protected;