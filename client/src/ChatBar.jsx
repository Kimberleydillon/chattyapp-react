import React, {Component} from 'react';

class Chatbar extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (event.key == 'Enter'){
      let text = this.refs['message-input-box'].value
      let user = this.refs['username-input-box'].value
      this.refs['message-input-box'].value = "";
      if(user.length === 0){
        user = "Anon"
      }
      if(text.length > 0){
        this.props.newMessage(user, text)
      }
    }
  }


  render() {
    return (
      <footer>
    <input id="username" ref="username-input-box" type="text"  placeholder="Your Name (Optional)" />
    <input id="new-message" ref="message-input-box" type="text" placeholder="Type a message and hit ENTER" onKeyDown={this.handleSubmit}/>
   </footer>
    );
  }
}
export default Chatbar;
