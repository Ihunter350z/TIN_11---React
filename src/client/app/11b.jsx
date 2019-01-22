import React from 'react';
const DisplayArea = function (props) {
    return <div >
        <textarea id = {props.idArea} name="Area" cols="10" rows="5" value ={props.textarea}  onChange = {props.change}>    
        </textarea>
    </div>
}
export default DisplayArea;