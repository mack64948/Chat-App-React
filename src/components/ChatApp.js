import React from "react";
import styled from "styled-components";

import UserProfileContainer from "./UserProfileContainer";
import ContactContainer from "./ContactContainer";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

import { contactsInfo } from "../data/contacts_info";
import {messageData} from "../data/data.jsx";

import avatarIrna from "../assets/irna.png";
import avatarJane from "../assets/jane.png";


const ChatContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 800px;
  padding: 0;
  margin: 0;
`

class ChatApp extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      messageData:messageData, 
      currentRespondent:{
        typingStatus: "typing...",
        avatar: avatarIrna,
        name: "Irna"
      },
      currentMessage: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSidebarClick = this.handleSidebarClick.bind(this);

  }

  handleSidebarClick(e){
   
    console.log("e.target:" + e.target);
    console.log("e.target.key:" + e.target.key);
    console.log("dataRef:" + e.target.key.dataRef);
    console.log("e.target.dataRef.name: " + e.target.dataRef.name);
    this.setState({selectedName:e.target.dataRef.name});
  }

  handleChange(e){
 
    this.setState({currentMessage: e.target.value})
  
  }

  handleSubmit(e){
   
    if(this.state.currentMessage === ""){
      return;
    }

    let newMessage = {
      isSender: true,
      avatar: avatarJane,
      message: this.state.currentMessage
    }

    let messages = this.state.messageData;
    messages.push(newMessage);

    this.setState({messageData: messages})
    this.setState({currentMessage:""})

    document.getElementById("input-field").value = "";
  }



  render() {
    return (<ChatContainerDiv>
 
      <Sidebar selectedName={this.state.selectedName} onClick={this.handleSidebarClick} contactsInfo={contactsInfo}></Sidebar>
      <Main messageData={this.state.messageData} 
            handleSubmit={this.handleSubmit} 
            handleChange={this.handleChange} 
            currentRespondent={this.state.currentRespondent}>    
        </Main>
  </ChatContainerDiv>);
  }
}

export default ChatApp