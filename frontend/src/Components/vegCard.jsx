

import React from "react";

const VegCard = ({vegId}) => {
    return (
        <div>

            <div>
                <img src={vegId.img} alt="vegetables" />
            </div>
            <p>FRESHO</p>
            <h4>{vegId.name}</h4>
            <p>{vegId.quantity}</p>
            <p>{vegId.price}</p>
            <p>Available</p>

        </div>
    )
}


export default VegCard;