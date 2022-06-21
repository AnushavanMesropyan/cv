export default function Skills({skillList}) {
    return(
        <div className="me-auto">
            <h2>Skills</h2>
           <ul>
               {skillList.map((item,index)=>{
                  return(
                      <li key={index}>{item}</li>
                  )
               })}
           </ul>
        </div>

    )
}