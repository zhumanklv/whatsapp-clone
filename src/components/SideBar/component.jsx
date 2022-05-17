import './SideBar.css'
import contacts from '../../utils/contacts'
import logo from '../../assets/icons/logo.jpeg'
import Icon from "../Icon/component";
import {Link} from "react-router-dom";
import {useContext} from "react";
import ContactIdContext from "../../context/contactIdContext";
export const SideBar = () => {
    const [_, setIndex] = useContext(ContactIdContext);
    return <div className="sidebar">
        <ul className="sidebar--table">
            {
                contacts.map((item, index) => {
                    const arr = Object.keys(item.messages);
                    return (
                        <Link to={'/chat/' + index} className="sidebar--link" onClick={() => {setIndex(index)}}>
                            <li key={index} className="sidebar--table_item">
                                <div className="sidebar--table_item-icon"><Icon src={logo} height="49px" width="49px"/></div>
                                <div className={index ? "sidebar--table_item-main" : "sidebar--table_item-main sidebar--table_item-main_first"}>
                                    <div className="sidebar--table_item-main--name">
                                        <div>{item.name}</div>
                                        <div className="sidebar--table_item-main--name--date">{arr[arr.length - 1]}</div>
                                    </div>
                                    <div className="sidebar--table_item-main--message">
                                        <div>{item.typing ? "typing..." : "loool keeek"}</div>
                                        <div className="sidebar--table_item-main--message--arrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 19 20"
                                                width="19"
                                                height="20"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    )
                })
            }
        </ul>
    </div>
}