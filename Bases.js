import React from 'react'

export default function Bases (props) {

    return (
        <>
        <h1>{props.name}</h1>
        <img style={{height:"200px",width:"200px"}} src={props.img} />
        <h1 style={{color:"grey",fontSize:"15px",height:"150px",width:"500px"}}>{props.desc}</h1>
        
        </>
    )

}