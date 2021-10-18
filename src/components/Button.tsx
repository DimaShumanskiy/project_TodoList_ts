import React from 'react';

type propsType = {
    callback: () => void
    name: string
    style?: any
}
const Button = (props: propsType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickHandler}
                className={props.style}
        >{props.name}</button>
    );
};

export default Button;