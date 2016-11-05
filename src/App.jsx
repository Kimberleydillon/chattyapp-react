import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.pushNewMessage = this.pushNewMessage.bind(this);
    console.log("App constructor")
    this.state = {
      currentUser: {name:"bob"},
      messages: [],
      //userCount:0
    }
  }
  componentDidMount(){
    console.log("componentDidMount <App />");
  setTimeout(() => {
    console.log("Simulating incoming message");
    // Add a new message to the list of messages in the data store
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    // Update the state of the app component.
    // Calling setState will trigger a call to render() in App and all child components.
    this.setState({messages: messages})
  }, 3000);
  }

pushNewMessage(name, content){
  console.log(name,content)
  const newMessage = {username: name, content: content};
  const messages= this.state.messages.concat(newMessage)
  this.setState({messages:messages})
}
  render() {
    console.log("rendered");
    return (
        <div className="wrapper">
          <nav>
            <h1>Shut up, Kyle</h1>
            </nav>
          <MessageList messages={this.state.messages} />
          <Message />
      <ChatBar currentUser={this.state.currentUser} newMessage={this.pushNewMessage}/>
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
