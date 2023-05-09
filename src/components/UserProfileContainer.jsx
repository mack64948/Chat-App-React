import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const StyledUserProfileContainer = styled.div`
    flex: 0 0 150px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: thin solid white;
    ${(props) => 
        "background-color:" + colors.maroon + ";"
    }
`

const StyledImage = styled.img`
    width: 60px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: transparent; 
`


const StyledSpan = styled.span`
    margin-right: 5px;
    font-size: 25px;
    color: white;
`

const StyledIcon = styled.i`
    margin-right: 5px;
`

const StyledInput = styled.input`
    background-color: ${colors.darkBlue};
    color: white;
    width: 300px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
`

class UserProfileContainer extends React.Component{
    constructor(props){
        super(props);

        this.contactInputHandler = this.contactInputHandler.bind(this);;
    }

    contactInputHandler(e){

    }

    render(){
        return ( <StyledUserProfileContainer>
        <StyledImage src={this.props.avatar} alt="" className="avatar" />
        <StyledSpan>{this.props.name}</StyledSpan>
        <StyledIcon className="fa-regular fa-pen-to-square"></StyledIcon>
        <StyledInput onChange={this.contactInputHandler} type="text" placeholder="Search or start a new chat..." />
  </StyledUserProfileContainer>);
    }
}

  

export default UserProfileContainer;