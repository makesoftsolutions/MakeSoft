import "./footer.css"
import { Link } from "react-router-dom"
import {SiGmail,SiInstagram,SiLinkedin} from "react-icons/si"

export default function Footer(props){
    return(
        <div className="footer">
            <Link to={props.redirects[0]} target="_blank"  className="footerlink">
                <SiGmail className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"} >{props.gmail}</p>
            </Link>
            <Link to={props.redirects[1]} target="_blank" className="footerlink">
                <SiInstagram className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"}>{props.instagram}</p>
            </Link>
            <Link to={props.redirects[2]} target="_blank" className="footerlink">
                <SiLinkedin className="icon"/>
                <p className={props.mobile ? "hidetext":"showtext"}>{props.linkedin}</p>
            </Link>
        </div>
    )
}