import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    return (
      <div id="message-list">
      {this.props.messages.map((item, index)=>{
        return <div> {item.id = index} {item.username}:   {item.content}</div>
      })}

    </div>
    );
  }
}
export default MessageList;

