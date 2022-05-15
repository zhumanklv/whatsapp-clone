import './SideBar.css'
import contacts from '../../utils/contacts'
import logo from '../../assets/icons/logo.jpeg'
import Icon from "../Icon/component";
export const SideBar = () => {
    return <div className="sidebar">
        <ul className="sidebar--table">
            {
                contacts.map((item, index) => {
                    return (
                        <li key={index} className="sidebar--table_item">
                            <div className="sidebar--table_item-icon"><Icon src={logo} height="49px" width="49px"/></div>
                            <div className={index ? "sidebar--table_item-main" : "sidebar--table_item-main sidebar--table_item-main_first"}>
                                <div className="sidebar--table_item-main--name"> {item.name}</div>
                                <div className="sidebar--table_item-main--message">{item.typing ? "typing..." : "loool keeek"}</div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </div>
}