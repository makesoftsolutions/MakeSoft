import Picturesrow from "../picturesrow/picturesrow"
import Presentation from "../presentation/presentation"

var dummy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla massa magna, facilisis vitae erat vel, varius porta purus. Maecenas rhoncus at magna ut aliquet. Integer viverra odio at diam imperdiet, in commodo enim porttitor. Nulla tellus elit, interdum sit amet molestie eu, tincidunt in risus. Nullam a semper nisi. Vestibulum suscipit velit in dolor consectetur porta. Nulla at justo erat. Aenean in imperdiet ipsum. Proin tincidunt eget leo eu tincidunt. Etiam tristique dolor eget fringilla ornare. Sed accumsan nulla id sem dictum, ut dapibus libero tempor. Ut porttitor blandit felis eu ornare. Proin nisl mauris, ullamcorper et augue ut, efficitur sagittis risus."


export default function Whoweare(props){
    return(
        <div className="whoweare">
            <Presentation title={"Quem somos"} paragraphs={[dummy,dummy + "a"]} mobile={props.mobile}/>
            <Picturesrow title={"Fotos"} mobile={props.mobile}/>
        </div>
    )
}