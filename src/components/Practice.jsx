import React from "react";
import Piano from "../assets/img/Piano.jpg";

function Practice() {
    return (
        <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden" >
                <img src={Piano} alt="" />
            </div>
            <div>
                <h3>HP Pavilion 15</h3>
                <h6>GHC5600</h6>
            </div>

        </div>
    )
}
