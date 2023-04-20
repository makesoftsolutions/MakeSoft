import "./footer.css"
import {SiGmail,SiInstagram,SiLinkedin} from "react-icons/si"

export default function Footer(props){
    return(
        <div className="footer">
            <div className="footerlink">
                <SiGmail className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"}>{props.gmail}</p>
            </div>
            <div className="footerlink">
                <SiInstagram className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"}>{props.instagram}</p>
            </div>
            <div className="footerlink">
                <SiLinkedin className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"}>{props.linkedin}</p>
            </div>
        </div>
    )
}