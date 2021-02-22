import React from 'react'

function FormField (props){
    return(
        <div className='field ml-4 my-4'>
      <label className='label'>{props.label}</label>
      <input className="input is-normal" type={props.type} placeholder={props.placeholder} />
    </div>
    )
}
export default FormField