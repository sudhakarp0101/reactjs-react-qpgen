import React from 'react';
import { useHistory } from 'react-router-dom';
import App1 from '../App1';
const Mybutton = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/App1");
    }

    return (
        <div>
            <button onClick={this.handleClick} type="button" />
        </div>
    );
}

export default Mybutton;