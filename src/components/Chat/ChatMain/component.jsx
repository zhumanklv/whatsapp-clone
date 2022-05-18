import './ChatMain.css'
import contacts from "../../../utils/contacts";
import ContactIdContext from "../../../context/contactIdContext";
import {useContext} from "react";

export const ChatMain = () => {
    const [index] = useContext(ContactIdContext);
    const messages = contacts[index].messages;
    const dates = Object.keys(messages);
    return <div className="chat-container">
        {
            dates.map((elem, index) => {
              return (
                  <div key={'date' + index}>
                          <div className="chat-date-box">
                              <div className="chat-date">{elem}</div>
                          </div>
                        {
                            messages[elem].map((message, ind) => {
                                return (
                                    message.sender ? (
                                        <div className="message-outer-container">
                                            <span className="message--tail">
                                                <svg viewBox="0 0 8 13" width="8" height="13" className=""><path
                                                    opacity=".13" fill="#0000000"
                                                    d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path
                                                    fill="currentColor"
                                                    d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
                                            </span>
                                            <div className="message-outer">
                                                <li key={'message' + ind} className="message">{message.content}</li>
                                            </div>
                                        </div>
                                        ) : (
                                        <div className="message-outer-container message-outer-block">
                                            <div className="message-outer message-outer-receive">
                                                <li key={'message' + ind} className="message">{message.content}</li>
                                            </div>
                                            <span className="message--tail-right">
                                                <svg
                                                    viewBox="0 0 8 13" width="8" height="13" >
                                                    <path
                                                        opacity=".13"
                                                        d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path
                                                    fill="currentColor"
                                                    d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    )
                                )
                            })
                        }
                  </div>
              )
            })
        }
    </div>
}