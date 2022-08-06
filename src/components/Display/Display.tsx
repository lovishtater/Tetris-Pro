import React from "react";
import { StyledDisplay } from "./Display.styles";

type props = {
    gameOver: boolean;
    text:string;
}

const Display : React.FC<props> = ({gameOver, text}) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}

export default Display;