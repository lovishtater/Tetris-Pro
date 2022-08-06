import React from "react"
import { StyledStartButton } from "./StartButton.styles"

type props = {
    callback : () => void;
}

const StartButton : React.FC<props> = ({callback}) => {
    return (
        <StyledStartButton onClick={callback}>
            Start
        </StyledStartButton>
    )
}

export default StartButton;
