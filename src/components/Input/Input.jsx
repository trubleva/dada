import React from 'react';
// import styles from './Input.module.scss';

const Input = (props) => {

    return(
        <input type={props.InputData.type} id={props.InputData.id} placeholder={props.InputData.placeholder} autocomplete={props.InputData.autocomplete} />

    )
}

export default Input;