import React from "react";
export default function Experien({experienCompany}){
    return(
        <div className="d-flex py-1">
            <div>
                <p>{experienCompany.location}</p>
                <p>{experienCompany.startEnd}</p>
            </div>
            <div className="mx-5">
                <h3>{experienCompany.position}</h3>
                <b>{experienCompany.company}</b>
                <div>
                    Responsibilities
                    <ul>
                        {experienCompany.responsibilities.map((responsibilitiy,index)=>{
                            return(
                                <li key={index} >{responsibilitiy}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}