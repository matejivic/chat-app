import { Component } from "react";
import React from "react";

export default class Messages extends Component {
    messagesContainerRef = React.createRef(); // Create a ref for the chat messages container

    componentDidUpdate() {
        this.messagesContainerRef.current.scrollTop = this.messagesContainerRef.current.scrollHeight;
    }

    renderMessage(message) {
        const { user, text } = message;
        return (
            <li key={message.id} id={user.clientData.name} className={user.id === this.props.currentUser.id ? "Messages-message currentMember" : "Messages-message"}>

                {/* <span className="avatar"><img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" alt={user.clientData.name} /></span> */}

                <div className="Message-content" >
                    <div className="username">
                        {user.clientData.name}
                    </div>
                    <div className="text" style={user.id === this.props.currentUser.id ? { backgroundColor: this.props.currentUser.color } : { backgroundColor: user.clientData.color }}>{text}</div>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div className="Messages" ref={this.messagesContainerRef}>
                <ul className="Messages-list">
                    {this.props.messages.map(m => this.renderMessage(m))}
                </ul>
            </div>
        );
    }
}
