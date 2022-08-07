import React, { useCallback, useState } from "react";
import { randomTetromino } from "../gameHelpers";
import { STAGE_WIDTH } from "../setup";

export type PLAYER = {
    pos: { x: number, y: number };
    tetromino: (number| string)[][];
    collided: boolean;
}

export const usePlayer = () => {
    const [player, setPlayer] = useState({} as PLAYER);

    const updatePlayerPos = ({ x, y, collided } : { x: number, y: number, collided: boolean })  : void => {
        setPlayer(prev => ({
            ...prev,
            pos: { x : prev.pos.x += x, y: prev.pos.y += y }, 
            collided
        }));
    }
    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false
        });
    } , []);

    return {player, updatePlayerPos, resetPlayer};
}