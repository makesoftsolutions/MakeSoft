import "./presentation.css"

export default function Presentation (props){
    return (
        <div className={props.mobile ? "mobilepresentation":"presentation"}>
            <div className="text">
                <h2>{props.title}</h2>
                {props.paragraphs.map((paragraph)=>{
                    return(
                        <p key={paragraph}>{paragraph}</p>
                    )
                })}
            </div>
        </div>
    )
}