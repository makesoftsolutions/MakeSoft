import {Routes, Route} from "react-router-dom"
import Goals from "./components/goals/goals"
import Whoweare from "./components/whoweare/whoweare"
import Services from "./components/services/services"
import Contactform from "./components/form/form"

export default function Approutes(props){
    return(
        <Routes>
            <Route path="/" element={<Whoweare mobile={props.mobile}/>}/>
            <Route path="/Objetivos" element={<Goals mobile={props.mobile}/>}/>
            <Route path="/servicos" element={<Services mobile={props.mobile}/>}/>
            <Route path="Contato" element={<Contactform mobile={props.mobile}/>}/>
        </Routes>
    )
}