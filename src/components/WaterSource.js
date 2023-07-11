import React from 'react'
import tap from "../resources/tap.png";
import well from "../resources/well.png";
import nozzle from "../resources/nozzle.png";

const WaterSource = ({waterSource}) => {
    if(waterSource== "Borehole System"){

        return <img src={nozzle} width={50} />
    }else if(waterSource == "Well with plumbing System"){
        return <img src={tap} width={50} />
    }else if(waterSource == "Well, Manual Fetching" ){
        return <img src={well} width={50} />
    }else{
        <img src={well} width={50} />
    }
}

export default WaterSource