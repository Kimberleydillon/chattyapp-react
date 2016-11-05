// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
    console.log(data)
  });
};

let messageID = 1;

let usersOnline = 0;

wss.on('connection', function connection(ws) {

  usersOnline += 1;

  wss.broadcast(JSON.stringify({
    type: 'userCount',
    usersOnline: usersOnline
  }));

  console.log('Client connected');
   ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    const id = messageID++;
    const messageObject = JSON.parse(message);
         messageObject.Id = id;

     if(messageObject.type === "postMessage") {
       wss.broadcast(JSON.stringify(messageObject));
     } else if(messageObject.type === "postNotification") {
       wss.broadcast(JSON.stringify(messageObject));
     } else {
       throw new Error("Could not recognize message type " + messageObject.type);
     }
   });

 ws.on('close', function () {
   usersOnline -= 1;
   wss.broadcast(JSON.stringify({
     type: 'userCount',
     usersOnline: usersOnline
   }));
 });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});

