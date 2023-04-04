import { Component } from "react";
import React from "react";

export default class Input extends React.Component {
    state = {
        text: "",
        user: this.props.user
    }

    onChange(e) {
        this.setState({ text: e.target.value.trimStart() });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    onSendMessage = (message) => {
        const messages = this.state.messages
        messages.push({
            text: message,
            user: this.state.user
        })
        this.setState({ messages: messages })
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={e => this.onSubmit(e)}>
                    <input
                        onChange={e => this.onChange(e)}
                        value={this.state.text}
                        type="text"
                        placeholder="Enter your message here"
                        autoFocus="true"
                    />
                    <button disabled={!this.state.text}  >Send</button>
                </form>
            </div>
        );
    }
}
