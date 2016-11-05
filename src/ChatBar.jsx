import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    return (
      <footer>
    <input id="username" type="text" name="newUsername" placeholder="Your Name (Optional)" /> {this.props.currentUser.map((item, index)=>{
        return <div> {newUsername} {item}</div>
      }
    <input id="new-message" type="text" name="newestMessage" placeholder="Type a message and hit ENTER" />
  </footer>
    );
  }
}
export default Chatbar;
