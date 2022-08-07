import React, { useEffect, useState } from "react";
import { createStage } from "../gameHelpers";
import {STAGECELL, STAGE} from "../components/Stage/Stage";
import { BLOCK } from "./useBlock";

export const useStage = (block : BLOCK, resetBlock : () => void) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        if (!block.pos) return;
        const updateStage = (prevStage:STAGE):STAGE => {
            // flush the stage 
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0,'clear']:cell )) as STAGECELL[]
    );


    // draw the tetromino
    block.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                newStage[y + block.pos.y][x + block.pos.x] = [value, `${block.collided ? 'merged' : 'clear'}`];
            }
        });
    });
    
    return newStage;
    };
    setStage(prev => updateStage(prev));
    }, [block.collided, block.pos?.x, block.pos?.y, block.tetromino]);
    return {stage, setStage};
}

    