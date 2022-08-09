import React from "react";
import { TETROMINOS } from "../../setup";
import { StyledCell } from "./Cell.styles";

type Props = {
    type : keyof typeof TETROMINOS;
    cellmerged : string;
}

const Cell: React.FC<Props> = ({ type, cellmerged }) => {
    return <StyledCell type={type} color={TETROMINOS[type].color} id="cell" className={cellmerged} />;
}

export default React.memo(Cell);