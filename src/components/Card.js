import React from "react";
const Card =({data})=>{

    return(
        <div className="tc bg-light-green br3 dib pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${data.id}`} alt="Robot" />
            <div>
                <h2>{data.name}</h2>
                <p>{ data.email}</p>
            </div>
        </div>
    )


}


export default Card;