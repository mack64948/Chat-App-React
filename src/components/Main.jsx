import { MainHeader } from "./MainHeader";
import InputArea from "./InputArea";
import { ChatArea } from "./ChatArea";
import styled from "styled-components";

const StyledMain = styled.main`

    flex: 1 0 700px;
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Main = (props) => {

    return (<StyledMain>
        <MainHeader currentRespondent={props.currentRespondent}></MainHeader>
        <ChatArea messageData={props.messageData}></ChatArea>
        <InputArea handleSubmit={props.handleSubmit} handleChange={props.handleChange}></InputArea>
    </StyledMain>);
}