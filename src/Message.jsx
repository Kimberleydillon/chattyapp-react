import React, {Component} from 'react';

class Message extends Component {
  componentDidMount(){
    console.log("message componentDidMount");
  }

  render() {
    console.log("message render")
    return (
       <div className="message">
      <span className="username">Anonymous1 </span>
      <span className="content">I won't be impressed with technology until I can download food.</span>
      </div>
    );
  }
}
export default Message;
