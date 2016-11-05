import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div id="message-list">
      {this.props.messages.map((item, index)=>{
        return <Message
        username= {item.username}
        content= {item.content}
        key={index} />

      })}

    </div>
    );
  }
}
export default MessageList;

