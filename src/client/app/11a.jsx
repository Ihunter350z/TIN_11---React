import React from 'react';

const DisplayLabel = function (props) {
    return <div id = {props.idDiv}>
        <label id={props.idLabel}>
            {props.labelName}
        </label>
        <input id ={props.idInput} type="text" value={props.inputName} onChange = {props.change} />
    </div>
}

export default DisplayLabel;