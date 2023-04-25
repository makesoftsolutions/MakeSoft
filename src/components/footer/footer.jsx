import "./footer.css"
import {SiGmail,SiInstagram,SiLinkedin} from "react-icons/si"

export default function Footer(props){
    return(
        <div className="footer">
            <div className="footerlink">
                <SiGmail className="icon"/>
                <a href={props.redirects[0]} rel="noreferrer" target="_blank" className={props.mobile ? "hidetext":"showtext"} >{props.gmail}</a>
            </div>
            <div className="footerlink">
                <SiInstagram className="icon"/>
                <a href={props.redirects[1]} rel="noreferrer" target="_blank"  className={props.mobile ? "hidetext":"showtext"}>{props.instagram}</a>
            </div>
            <div className="footerlink">
                <SiLinkedin className="icon"/>
                <a href={props.redirects[2]} rel="noreferrer" target="_blank"  className={props.mobile ? "hidetext":"showtext"}>{props.linkedin}</a>
            </div>
        </div>
    )
}