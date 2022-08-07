import React from "react";
import { TETROMINOS } from "../../setup";
import Cell from "../Cell/Cell";
import { StyledStage } from "./Stage.styles";

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type props = {
    stage : STAGE;
}

const Stage: React.FC<props> = ({ stage }) => {
    return (
        <StyledStage>
            {stage.map((row, y) => {
                return row.map((cell, x) => {
                    return <Cell key={x} type={cell[0]} />;
                })
            })}
        </StyledStage>
    );
}

export default Stage;