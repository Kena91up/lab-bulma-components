import React from 'react'

function CoolButton(props){
    return(
        <button className={props.classes}>
            {props.children}
        </button>
    )
}
export default CoolButton