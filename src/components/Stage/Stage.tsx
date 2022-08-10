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
        <StyledStage id="stage">
            {stage.map((row, y) => {
                return row.map((cell, x) => {
                    return (
                      <Cell
                        key={y * row.length + x}
                        type={cell[0]}
                        cellmerged={cell[1]}
                        cellKey={y * row.length + x}
                      />
                    );
                })
            })}
        </StyledStage>
    );
}

export default Stage;