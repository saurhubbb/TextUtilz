import React from 'react'

export default function Alerts(props) {
    const capital=(word)=>{         //To capitalize the alert Success word
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height: '50px'}}>
    {props.alert &&       //if the props.alert is false than it will not excute further
    <>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div></>}
    </div>
    
  )
}
