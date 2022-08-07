import React, { useEffect, useState } from "react";
import { createStage } from "../gameHelpers";
import {STAGECELL, STAGE} from "../components/Stage/Stage";
import { PLAYER } from "./usePlayer";

export const useStage = (player : PLAYER, resetPlayer : () => void) => {
    const [stage, setStage] = useState(createStage());

    useEffect(() => {
        if (!player.pos) return;
        const updateStage = (prevStage:STAGE):STAGE => {
            // flush the stage 
            const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0,'clear']:cell )) as STAGECELL[]
    );


    // draw the tetromino
    player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`];
            }
        });
    });
    
    return newStage;
    };
    setStage(prev => updateStage(prev));
    }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);
    return {stage, setStage};
}

    