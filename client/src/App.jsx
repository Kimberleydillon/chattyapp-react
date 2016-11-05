import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.pushNewMessage = this.pushNewMessage.bind(this);

    this.state = {
      currentUser: {name: "Anon"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      userCount:0
    };
  };

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:4000");
    this.socket.onopen = (event) => {
      console.log("Connected to Server.")
      this.socket.onmessage = (event) => {
        console.log(event);
        let newMessage = JSON.parse(event.data);
          switch(newMessage.type) {
            case "postMessage":
            case "postNotification":
              let post = this.state.messages.concat(newMessage)
              this.setState({messages: post})
              break;
            case "userCount":
              this.setState({userCount: newMessage.usersOnline})
              break;
          }
        }
    };
  };

  sendMessageToServer(messageObject){
    console.log(messageObject)
    this.socket.send(JSON.stringify(messageObject))
  };

  pushNewMessage(name, content){
    if (this.state.currentUser.name !== name) {
      this.postNewNotification(name)
      this.state.currentUser.name = name
      this.setState({currentUser: this.state.currentUser})
    };
     const newMessage = {
      type: "postMessage",
      username: name,
      content: content,
    };
  this.sendMessageToServer(newMessage)
  };

  postNewNotification(newUsername){
     const newMessage = {
      type: "postNotification",
      oldUsername: this.state.currentUser.name,
      newUsername: newUsername,
    };
  this.sendMessageToServer(newMessage)
  };

  render() {
    return (
      <div className="wrapper">
        <nav>
          <h2>Shut Up, Kyle</h2>
          <h4>users on {this.state.userCount}</h4>
        </nav>
        <div id="message-list">
          <MessageList data={this.state.messages} />
        </div>
        <ChatBar currentUser={this.state.currentUser} newMessage={this.pushNewMessage} />
      </div>
    );
  };
};
export default App;