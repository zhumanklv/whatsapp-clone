import "./Chat.css"
import ChatHeader from "./ChatHeader";
import ChatFooter from './ChatFooter'
import ChatMain from "./ChatMain";
export const Chat = () => {
    return <div className="chat">
        <ChatHeader/>
        <ChatMain/>
        <ChatFooter/>
    </div>
}