import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  componentDidMount(){
    console.log("MessageList componentDidMount");
  }
  render() {
    console.log("MessageList render")
    return (
      <div id="message-list">
    </div>
    );
  }
}
export default MessageList;

