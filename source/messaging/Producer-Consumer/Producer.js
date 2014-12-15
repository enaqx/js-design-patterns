/**
 * Producer Class
 */

import amqp from 'amqplib'; // AMQP Messaging Protocol

class Producer {
  constructor(name, queue, brokerURL) {
    this.name = name;
    this.queue = queue;
    this.brokerURL = brokerURL;
    this.promise = new Promise().then();
    this.connection = amqp.connect(brokerURL).then(connection =>
    connection.createChannel()).catch(console.warn.bind(console));
    this.connection.then(channel => this.channel = channel);
    console.log('Created Producer', name, 'for queue', queue);
  }

  getName() {
    return this.name;
  }

  getQueue() {
    return this.queue;
  }

  getBrokerURL() {
    return this.brokerURL;
  }

  sendMessage(msg) {
    var con = this.connection;
    this.connection.then(() => {
    this.channel.assertQueue(this.queue, {durable: false}).then(() => {
      this.channel.sendToQueue(this.queue, new Buffer(msg));
      console.log(" [x] Sent '%s'", msg);
      this.channel.close();
    });
  return con;
  });
}

  closeConnection() {
    this.connection.then(() => {
    close();
    return this;
  });
}
}

let brokerURL = 'amqp://localhost';
let alice = new Producer('Alice', 'hello', brokerURL);
let bob = new Producer('Bob', 'hello', brokerURL);
// setTimeout(() => {
alice.sendMessage('Alice Send: Hello World');
bob.sendMessage('Bob Send: Hello World');
alice.sendMessage('Alice Send Again: Hello World');
bob.sendMessage('Bob Send Again: Hello World');
// alice.closeConnection();
// bob.closeConnection();
// }, 3000);