import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class Chatbar extends Component {
  componentDidMount(){
    console.log("Chatbar componentDidMount");
  }
  render() {
    console.log("Chatbar render")
    return (
      <footer>
    <input id="username" type="text" placeholder="Your Name (Optional)" />
    <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
  </footer>
    );
  }
}
export default Chatbar;
