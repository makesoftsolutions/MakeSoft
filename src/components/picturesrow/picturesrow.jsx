import "./picturesrow.css"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from "react"

import picture1 from "../../images/image0.jpeg"
import picture2 from "../../images/image1.jpeg"

const pictures=[picture1,picture2]

export default function Picturesrow(props){

    var [activepicure,setactivepicture] = useState(0)

    function handlerightarrowclick(){
        if (activepicure === pictures.length -1){
            return
        }
        setactivepicture(activepicure + 1)
    }
    function handleleftarrowclick(){
        if(activepicure === 0){
            return
        }

        setactivepicture(activepicure -1)
    }
    
    return(
        <div className="picturesrow">
            <h2>{props.title}</h2>
            <div className="pictures">
                
                <AiOutlineArrowLeft className={props.mobile? "mobilearrowicon":"arrowicon"} onClick={handleleftarrowclick}  style={{ visibility: activepicure !== 0 ? 'visible' : 'hidden' }} />
                <img className={props.mobile ? "mobilepicture":"picture"} src={pictures[activepicure]} alt=""/>
                <AiOutlineArrowRight className={props.mobile? "mobilearrowicon":"arrowicon"}  onClick={handlerightarrowclick}  style={{ visibility: activepicure !== pictures.length -1 ? 'visible' : 'hidden' }} />

            </div>
        </div>
    )
}