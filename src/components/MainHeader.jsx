import styled from "styled-components";
import colors from "../utils/colors";
import typography from "../utils/typography";

const ChatHeader = styled.header`

  flex: 0 0 100px;
  background-color: ${colors.mediumMagentaPink};
  font-family: ${typography.chatHeaderFontFamily};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`

const AvatarContainer = styled.div` 
  flex: 0 0 100px;
  background-color: none;
  padding-left: 20px;

`

const AvatarImage = styled.img`

  border-radius: 50%;
  background-color: transparent;


`

const StatusContainer = styled.div`
  flex: 1 2 auto;
  height: 80px;
  background-color: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: ${colors.white};
`

const NameHeading = styled.h2`
  margin: 0;
  background-color: none;
`

const TypingStatusHeading = styled.h3`
  margin: 0;
  margin-top: 5px;
  background-color: none;
`
export const MainHeader = (props) => {
   return ( <ChatHeader>
        <AvatarContainer>
        <AvatarImage src={props.currentRespondent.avatar} alt=""/>
        </AvatarContainer>
        <StatusContainer>
        <NameHeading>{props.currentRespondent.name}</NameHeading>
        <TypingStatusHeading>{props.currentRespondent.typingStatus}</TypingStatusHeading>
        </StatusContainer>
  </ChatHeader>);
}