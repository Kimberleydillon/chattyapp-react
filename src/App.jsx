import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  // constructor (props){
  //   super(props)
  //   this.state ={data:[]}
  // }
  componentDidMount() {
    console.log("App ComponentDidMount")
    //using third party libaries
    //also ajax requests
    // $.get("./data.js")
    // .then ((data) => {
    // this.setState({data:data})
    // })
    // .catch((err)=> {
    //   alert("Could not get data");
    //   })// set the data as the state here

    }
  render() {
    console.log("app render")
  return (
  <div className="wrapper">
    <nav>
      <h1>Shut up, Kyle</h1>
    </nav>
    <div className="message-list">
      <MessageList />
      <Message/>
     </div>
    <ChatBar/>
  </div>
    );
  }
}
//currentUser={this.state.currentUser}
//ReactDOM.render(<Chatbar/>, document.getElementById('react-root'));
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
