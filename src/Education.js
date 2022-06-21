import React from "react";
export default  function Education({educationItem}) {
    return(
        <div className="d-flex py-1">
            <div>
                <p>{educationItem.location}</p>
                <p>{educationItem.startEnd}</p>
            </div>
            <div className="mx-5">
                <h4>{educationItem.position}</h4>
                <b>{educationItem.company}</b>
            </div>
        </div>
    )
}