import styled from "styled-components";

import ContactContainer from "./ContactContainer";
import UserProfileContainer from "./UserProfileContainer";
import { AddContactComponent } from "./AddContactComponent";

import avatarJane from "../assets/jane.png";

const StyledContactSidebar = styled.aside`
  flex: 0 0 380px;
  background-color: var(--maroon);
  display: flex;
  flex-direction: column;
  z-index: 2;
`

export const Sidebar = (props) => {

    let contactContainers = props.contactsInfo.map(
        (contactInfo) => {
          return (<ContactContainer 
            onClick={props.onClick}
            isSelected={props.selectedName === contactInfo.name}
           
            name={contactInfo.name} 
            isTyping={contactInfo.isTyping} 
            avatar={contactInfo.avatar}
            lastMessage={contactInfo.lastMessage}
            lastMessageTime={contactInfo.lastMessageTime}
            totalUnreadMessages={contactInfo.totalUnreadMessages}></ContactContainer>);
        }
      );
    return (<StyledContactSidebar>
 
    <UserProfileContainer
        avatar={avatarJane}
        name="Jane Doe"
        ></UserProfileContainer>

    
    {contactContainers}

    <AddContactComponent></AddContactComponent>
   
</StyledContactSidebar>);;
}