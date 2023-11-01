import React from 'react'

export default function ModeButton(props) {

    const handleClick = () => {
        document.body.style.backgroundColor = props.bgColor;
        document.body.style.color = props.mode.color;
    }

    return (

        props.mode &&
        <button type='button' className='btn btn-primary mx-3 my-3' style={{color: props.mode.color, backgroundColor: props.bgColor, border:`1px solid ${props.mode.color}`}} onClick={handleClick}>{props.mode.text} {props.bgColor}</button>
    )
}
