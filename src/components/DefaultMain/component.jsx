import './DefaultMain.css'
import main from '../../assets/icons/main-img.jpg'
import Icon from "../Icon/component";
export const DefaultMain = () => {
    return <div className="main">
            <Icon src={main} width="355px" height="355px" borderRadiusFalse/>
            <div className="main--text">
                <div className="main--text_first">Keep your phone connected</div>
                <div className="main--text_second">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</div>
            </div>
    </div>
}
