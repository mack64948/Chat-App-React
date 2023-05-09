import styled from "styled-components";
import colors from "../utils/colors";

const AddContactContainer = styled.div`
    padding: 10px 10px 0 0;
    background-color: ${colors.maroon};
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

`

const StyledButton = styled.button`
    width: 80px;
    height: 80px;
    background-color: ${colors.yellow};
    color: white;
    font-size: 50px;
    border: none;
    border-radius: 40px;
`

export const AddContactComponent = (e) => {

    return (<AddContactContainer>
        <StyledButton>+</StyledButton>
    </AddContactContainer>);
}