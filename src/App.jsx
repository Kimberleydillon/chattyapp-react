import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
        <div class="wrapper">
          <nav>
            <h1>Shut up, Kyle</h1>
            </nav>
          <div id="message-list">
          <MessageList />
          <Message/>
      </div>
      <ChatBar/>
        </div>
    );
  }
}
export default App;
//The index.jsx file mounts our App component onto a DOM element, in this case, react-root.

// ES6 way using class
//class App extends React.Component {
  //render() {
    // .. code in the render function
  //}
//}

// var data = {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//     },
//     {
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
//     }
//   ]
// };
