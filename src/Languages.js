export default function Languages({languages}) {
    return(
        <div>
            <h2>LANGUAGES</h2>

            {languages.map((item,index)=>{
                return(
                    <div key={index}>
                        <b>{item.type}</b>
                        <p>{item.status}</p>
                    </div>
                )
            })}
        </div>
    )
}