import Presentation from "../presentation/presentation"
import "./services.css"
import printer3d from "../../images/3d-printer.png"
import lasercut from "../../images/maquina-de-corte-a-laser.png"
import customise from "../../images/customise.png"
import modeling3d from "../../images/modeling-3d.png"

const p1 = "Em nossa empresa júnior, oferecemos serviços de prototipagem, impressão 3D, modelagem e corte a laser para empresas e indivíduos que buscam soluções tecnológicas."
const p2 = "Se você está procurando soluções tecnológicas para seus projetos, entre em contato conosco para saber mais sobre nossos serviços. Estamos sempre prontos para ajudá-lo colocar suas ideias em prática!"
const prototypeP = "Na área de prototipagem, oferecemos serviços de modelagem 3D, impressão de protótipos feitos de ABS, PLA ou TPU, e montagem de protótipos funcionais. Permitindo que nossos clientes testem suas ideias de forma rápida e eficiente, reduzindo os custos e o tempo de desenvolvimento."
const printingP = "Para a impressão 3D, utilizamos tecnologia de ponta para produzir peças em ABS, PLA ou TPU. Isso permite que nossos clientes produzam peças personalizadas, sob demanda, e reduzam os custos de produção."
const lasercutP = "Em relação ao corte a laser, oferecemos serviços de corte e gravação em diversos materiais, como madeira, acrílico, MDF, couro, tecido entre outros. Com isso, nossos clientes podem criar peças personalizadas e exclusivas, de alta qualidade."
const personalizationP = "Nossos serviços são personalizados de acordo com as necessidades de cada cliente. Temos um compromisso com a excelência e qualidade em todos os nossos serviços, buscando sempre superar as expectativas."

export default function Services(props) {
    return (
        <div className="services">
            <Presentation title={"Serviços"} paragraphs={[p1,p2]} mobile={props.mobile} />
            <ul className={props.mobile ? "mobileservicesrow" : "servicesrow"}>
                <li>
                    <img className="serviceicon" src={printer3d} alt="Impressão 3D" />
                    <h2>Impressão 3D</h2>
                    <p>{printingP}</p>
                </li>
                <li>
                    <img className="serviceicon" src={lasercut} alt="Corte a Laser" />
                    <h2>Corte a laser</h2>
                    <p>{lasercutP}</p>
                </li>
                <li>
                    <img className="serviceicon" src={modeling3d} alt="Modelagem" />
                    <h2>Prototipagem</h2>
                    <p>{prototypeP}</p>
                </li>
                <li>
                    <img className="serviceicon" src={customise} alt="Personalização" />
                    <h2>Personalização</h2>
                    <p>{personalizationP}</p>
                </li>
            </ul>
        </div>
    )
}