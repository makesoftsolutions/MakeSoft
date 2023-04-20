import {Routes, Route} from "react-router-dom"
import Goals from "./components/goals/goals"
import Whoweare from "./components/whoweare/whoweare"
import Services from "./components/services/services"
import Contactform from "./components/form/form"

export const relativepath = "/makesoft_solutions"

export default function Approutes(props){
    return(
        <Routes>
            <Route path={relativepath + "/"} element={<Whoweare mobile={props.mobile}/>}/>
            <Route path={relativepath + "/Objetivos"} element={<Goals mobile={props.mobile}/>}/>
            <Route path={relativepath + "/servicos"} element={<Services mobile={props.mobile}/>}/>
            <Route path={relativepath + "Contato"} element={<Contactform mobile={props.mobile}/>}/>
        </Routes>
    )
}