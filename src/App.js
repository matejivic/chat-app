import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import Messages from './Components/Messages';
import Input from './Components/Input';
import randomColor from './Utilities/randomColor';
import randomName from './Utilities/randomName';


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      messages: [
      ],
      user: {
        color: randomColor(),
        name: randomName()
      },
    }
    this.drone = new window.Scaledrone('CqJCHzn4U5paQPPq', {
      data: this.state.user
    });

    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      const user = { ...this.state.user };
      user.id = this.drone.clientId;
      this.setState({ user });
    });

    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, user) => {
      const messages = this.state.messages;
      messages.push({ user, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Matej's Web Chat</h1>
        </div>
        <Messages messages={this.state.messages} currentUser={this.state.user} />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
