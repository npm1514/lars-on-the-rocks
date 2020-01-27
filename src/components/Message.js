import React, { Component } from 'react';
import { Message, Title, Subtitle } from '../styled-components/components/message';

class MessageComponent extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }
  submitMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    console.log("send email", this.state);
  }
  changeState = (prop, val) => {
    let obj = {};
    obj[prop] = val;
    console.log(obj);
    this.setState(obj);
  }
  render(){
    const { name, email, message } = this.state;
    return (
      <Message>
        <Title>Contact Me</Title>
        <Subtitle>
          Lars Robertson<br/>
          1149 S 300 E<br/>
          Salt Lake City, UT<br/>
        </Subtitle>
        <form onSubmit={this.submitMessage}>
          <input
            onChange={(e) => this.changeState("name", e.target.value)}
            value={name}
            type="text"
            placeholder="Name (required)"
            required
          />
          <input
            onChange={(e) => this.changeState("email", e.target.value)}
            value={email}
            type="email"
            placeholder="Email (required)"
            required
          />
          <textarea
            onChange={(e) => this.changeState("message", e.target.value)}
            value={message}
            placeholder="Message (required)"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </Message>
    );
  }
}

export default MessageComponent;
