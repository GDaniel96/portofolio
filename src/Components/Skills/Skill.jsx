import React from "react";


const Skill = (props) => {
    return (
        <div >
            <img src={props.src}></img>
            <div className="progressBar">
                <div style={{ width: props.value, backgroundColor: props.color }}></div>
            </div>
        </div>
    )
}

export default Skill