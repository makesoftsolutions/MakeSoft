import Presentation from "../presentation/presentation"
import "./services.css"
import printer3d from "../../images/3d-printer.png"
import lasercut from "../../images/maquina-de-corte-a-laser.png"
import customise from "../../images/customise.png"
import modeling3d from "../../images/modeling-3d.png"

var dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa magna, facilisis vitae erat vel, varius porta purus. Maecenas rhoncus at magna ut aliquet. Integer viverra odio at diam imperdiet, in commodo enim porttitor. Nulla tellus elit, interdum sit amet molestie eu, tincidunt in risus. Nullam a semper nisi. Vestibulum suscipit velit in dolor consectetur porta. Nulla at justo erat. Aenean in imperdiet ipsum. Proin tincidunt eget leo eu tincidunt."


export default function Services(props) {
    return (
        <div className="services">
            <Presentation title={"Serviços"} paragraphs={[dummy]} mobile={props.mobile} />
            <ul className={props.mobile ? "mobileservicesrow" : "servicesrow"}>
                <li>
                    <img className="serviceicon" src={printer3d} alt="Impressão 3D" />
                    <p>Impressão 3D</p>
                </li>
                <li>
                    <img className="serviceicon" src={lasercut} alt="Corte a Laser" />
                    <p>Corte a laser</p>
                </li>
                <li>
                    <img className="serviceicon" src={modeling3d} alt="Modelagem" />
                    <p>Modelagem</p>
                </li>
                <li>
                    <img className="serviceicon" src={customise} alt="Personalização"/>
                    <p>Pesrsonalização</p>
                </li>
            </ul>
        </div>
    )
}