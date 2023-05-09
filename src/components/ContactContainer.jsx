import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const ContactContainerDiv = styled.div`

  flex: 0 0 100px;
  background-color: ${colors.maroon};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 10px;
  color: white;
  border-bottom: thin solid white;
  ${(props) => 
    props.$isSelected && 
    `background-color: ${colors.darkBlue};`
  }

`

const AvatarContainer = styled.div`
  background-color: transparent;
`

const AvatarImage = styled.img`
  border-radius: 50%;
  background-color: transparent;
`

const MiddleDiv = styled.div`
  background-color: none;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  
`

const RightDiv = styled.div`
  flex: 1 0 120px;
  background-color: none;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`

const RightDivHeading = styled.h5`
  flex-basis: 80px;
  margin: 0;
  color: white;
  margin-right: 10px;
  font-size: 15px;
`

const UnreadMessagesIndicator = styled.span`
  border-radius: 15px;
  height: 30px;
  width: 30px;
  padding: 5px;
  text-align: center;
  background-color: #FFCB62;
`

 class ContactContainer extends React.Component{
  constructor(props){
    super(props);
    this.dataRef = React.createRef();
  }
   


    
    render() {
     

    

        this.dataRef = {name: this.props.name}

        return (
        <ContactContainerDiv ref={ el => this.dataRef = el} onClick={this.props.onClick}>
        <AvatarContainer onClick={(e) => e.stopPropagation()} className="left-col">
          <AvatarImage src={this.props.avatar} alt=""/>
        </AvatarContainer>
        <MiddleDiv onClick={(e) => e.stopPropagation()} className="middle-col">
          <h5 style={{fontSize: "20px",marginBottom: "10px",marginTop: "0px"}}>{this.props.name}</h5>
          <h5 style={{fontSize: "13px", marginBottom: "5px", marginTop: "0px"}}>{this.props.isTyping ? "Typing..." : this.props.lastMessage}</h5>
        </MiddleDiv>
        <RightDiv onClick={(e) => e.stopPropagation()}  className="right-col">
          <RightDivHeading>{this.props.lastMessageTime}</RightDivHeading>
          {<UnreadMessagesIndicator style={{visibility: this.props.totalUnreadMessages === 0 ? "hidden" : "visible"}}>{this.props.totalUnreadMessages}</UnreadMessagesIndicator>}
          
        </RightDiv>
      </ContactContainerDiv>
    );
      }
}

export default ContactContainer