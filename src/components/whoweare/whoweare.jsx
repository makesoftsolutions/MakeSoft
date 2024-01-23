import Picturesrow from "../picturesrow/picturesrow"
import Presentation from "../presentation/presentation"

const p1 = "Olá, seja bem-vindo(a)!"
const p2 = "Se você chegou até aqui, é porque está se perguntando quem somos. Bem, neste site vamos responder essa pergunta e muito mais."
const p3 = " Somos membros da empresa júnior do Campus Divinópolis do Centro Federal de Educação Tecnológica de Minas Gerais, também conhecido como CEFETMG. Acreditamos que a aprendizagem prática é fundamental para o desenvolvimento pessoal e profissional de nossos membros, por isso a nossa empresa é composta exclusivamente por estudantes universitários apaixonados por tecnologia e inovação." 
const p4 = "Além de proporcionar oportunidades de aprendizado para nossos membros, também oferecemos serviços de alta qualidade a preços acessíveis para nossos clientes. Ao escolher trabalhar conosco, você estará apoiando o desenvolvimento de jovens empreendedores e terá acesso a ótimas soluções tecnológicas."
const p5 = "Em nosso site, você encontrará informações detalhadas sobre nossos serviços, projetos e equipe. Fique à vontade para explorá-lo e não hesite em entrar em contato conosco caso tenha alguma dúvida ou precise de ajuda."
const p6 = "Agradecemos a sua visita e esperamos ter a oportunidade de trabalhar juntos em breve!"

export default function Whoweare(props){
    return(
        <div className="whoweare">
            <Presentation title={"Quem somos"} paragraphs={[p1,p2,p3,p4,p5,p6]} mobile={props.mobile}/>
            <Picturesrow title={"Fotos"} mobile={props.mobile}/>
        </div>
    )
}