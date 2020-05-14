import React from "react"
export default function Column(props){
    return (
        <div className={props.size} >
            {props.children}
        </div>
    )
}