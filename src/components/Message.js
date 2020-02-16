import React, { Component } from 'react';
import { Message, Title, Subtitle } from '../styled-components/components/message';

class MessageComponent extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    textUpdate: ""
  }
  submitMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    fetch('/email', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(res => {
      this.changeText("Message Delivery Successful. Lars will get back to you shortly.")
    })
    .catch(err => {
      this.changeText("Message Delivery Unsuccessful. Try again or try to contact Lars another way. Sorry!!")
    })
  }
  changeText = (val) => {
    this.setState({textUpdate: val})
    setTimeout(() => {
      this.setState({textUpdate: ""})
    }, 5000)
  }
  changeState = (prop, val) => {
    let obj = {};
    obj[prop] = val;
    this.setState(obj);
  }
  render(){
    const { name, email, message, textUpdate } = this.state;
    return (
      <Message>
        <Title>Contact Me</Title>
        <Subtitle>
          Lars Robertson<br/>
          larsontherocks@yahoo.com
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
          {textUpdate && <label>{textUpdate}</label>}
        </form>
      </Message>
    );
  }
}

export default MessageComponent;
