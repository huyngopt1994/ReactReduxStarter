import React, {Component} from "react";
import "./Chats.css"

const Chat = ({message}) => {
    const {text, is_user_msg} = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    )
};

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatRef = React.createRef(); // make refs
    }

    scrollToBottom = () => {
        console.log(this.chatRef.current);
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    };
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="Chats" ref={this.chatRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number}/>
                ))}
            </div>
        )
    }
}


export default Chats;
