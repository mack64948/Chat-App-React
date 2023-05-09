import styled from "styled-components";

const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  ${(props) => 

   
    !props.$isSender && `
      flex-direction: row-reverse;
    `

  }}
`

const AvatarImage = styled.img`

  border-radius: 50%;
  background-color: transparent;

`

const MessageBubble = styled.span`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  flex: 0 0 600px;
`

export const MessageContainer = (props) => {
    
    return props.isSender ? (<StyledMessageContainer>
          <AvatarImage style={{marginLeft: "20px"}} src={props.avatar} alt="" />
          <MessageBubble>{props.message}</MessageBubble>
        </StyledMessageContainer>) : 
        
        (<StyledMessageContainer $isSender>
          <AvatarImage style={{marginRight: "20px"}} src={props.avatar} alt="" />
          <MessageBubble>{props.message}</MessageBubble>
        </StyledMessageContainer>) ;
}