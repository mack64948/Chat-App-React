
import { MessageContainer } from "./MessageContainer";
import styled from "styled-components";

const ChatAreaDiv = styled.div`

    overflow-y: scroll;
    flex: 0 0 620px;
    flex-direction: column;

    background-color: antiquewhite;
    display: flex;
    padding: 10px 15px;
  
`

export const ChatArea = (props) => {
    let messageContainers = props.messageData.map((messageInfo) =>{
        return <MessageContainer
        isSender={messageInfo.isSender}
        avatar={messageInfo.avatar}
        message={messageInfo.message}
        ></MessageContainer>;
    });
    return (
        <ChatAreaDiv>
        
            {messageContainers}
      </ChatAreaDiv>
    );
}