import React, { useEffect, useState } from "react";
import { createStage } from "../gameHelpers";
import {STAGECELL, STAGE} from "../components/Stage/Stage";
import { BLOCK } from "./useBlock";

export const useStage = (block : BLOCK, resetBlock : () => void) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        if (!block.pos) return;
        setRowsCleared(0);

        const sweepRows = (newStage : STAGE) : STAGE => { 
            return newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']) as STAGECELL[]);
                    return ack;
                }
                ack.push(row);
                return ack;
            }, [] as STAGE);
        }

        const updateStage = (prevStage:STAGE):STAGE => {
            // flush the stage 
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0,'clear']:cell )) as STAGECELL[]
    );

    // draw the tetromino
    block.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                newStage[y + block.pos.y][x + block.pos.x] = [value, `${block.collided ? 'merged' : 'clear'}`] as STAGECELL;
            }
        });
    });

    // check if the tetromino has collided
    if (block.collided) {
        resetBlock();
        return sweepRows(newStage);
    }
    
    return newStage;
    };
    setStage(prev => updateStage(prev));
    }, [block.collided, block.pos?.x, block.pos?.y, block.tetromino]);
    return {stage, setStage, rowsCleared};
}

    