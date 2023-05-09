import React from "react";
import styled from "styled-components";


const StyledInputArea = styled.div`

    flex: 0 0 120px;
    background-color: beige;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;

`

const StyledTextArea = styled.textarea`
  flex: 1 1 auto;
  font-family: Verdana;
  padding: 10px 10px;
  font-size: 20px;
  line-height: 20px;
  border: none;
`

const StyledButton = styled.button`
  flex: 0 0 100px;
  border: none;
  background-color: lightgreen;
  color: white;
`

class InputArea extends React.Component{
    constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }


    handleSubmit(e){
      this.props.handleSubmit(e);
  }

  handleChange(e){
      this.props.handleChange(e);
  }
    


    render(){
        return (<StyledInputArea>
          <StyledTextArea placeholder="Type here..." 
            name="" 
            id="input-field"
            value={this.props.currentMessage} 
          onChange={this.handleChange} ></StyledTextArea>
        <StyledButton id="send-button" onClick={this.handleSubmit}>Send</StyledButton>
      </StyledInputArea>);
    }
}

export default InputArea