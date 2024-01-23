import Presentation from "../presentation/presentation"
import Picturesrow from "../picturesrow/picturesrow"

const p1 = "Na nossa empresa júnior, temos como objetivo principal fornecer soluções tecnológicas em prototipagem, impressão 3D, modelagem e corte a laser para empresas e pessoas que buscam inovação em seus projetos."
const p2 = "Como objetivos específicos, incluímos fornecer serviços de alta qualidade a preços acessíveis, garantindo sua satisfação e fidelização. Buscar sempre a inovação e melhoria de nossos serviços, acompanhando as tendências do mercado e as necessidades dos nossos clientes. "
const p3 = "Acreditamos que ao alcançar nossos objetivos, estamos contribuindo para a formação de uma sociedade mais inovadora, empreendedora e tecnológica."

export default function Goals(props) {
    return (
        <div className="goals">
            <Presentation title={"Objetivos"} paragraphs={[p1,p2,p3]} mobile={props.mobile} />
            <Picturesrow title={"Fotos"} mobile={props.mobile} />
        </div>
    )
}