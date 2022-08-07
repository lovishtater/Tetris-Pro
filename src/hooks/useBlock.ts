import React, { useCallback, useState } from "react";
import { STAGE } from "../components/Stage/Stage";
import { isColliding, randomTetromino } from "../gameHelpers";
import { STAGE_WIDTH } from "../setup";

export type BLOCK = {
    pos: { x: number, y: number };
    tetromino: (number| string)[][];
    collided: boolean;
}

export const useBlock = () => {
    const [block, setBlock] = useState({} as BLOCK);

    const rotate = (matrix : BLOCK['tetromino']) => {
        const rotatedTetromino = matrix.map((_, index) => matrix.map(row => row[index])); // transpose matrix
        return rotatedTetromino.map(row => row.reverse()); // reverse each row to get the rotated matrix
    }

    const blockRotate = (stage: STAGE): void => {
        const clonedBlock = Object.assign({}, block); // make a copy of the current block tetromino (deep clone)
        clonedBlock.tetromino = rotate(clonedBlock.tetromino);
        const posX = clonedBlock.pos.x;
        let offset = 1;

        while (isColliding(clonedBlock, stage, { x: 0, y: 0 })) {
            clonedBlock.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedBlock.tetromino[0].length) {
                // rotate(clonedBlock.tetromino);
                clonedBlock.pos.x = posX;
                return;
            }
        }
        setBlock(clonedBlock);
    }

    const updateBlockPos = ({ x, y, collided } : { x: number, y: number, collided: boolean })  : void => {
        setBlock(prev => ({
            ...prev,
            pos: { x : prev.pos.x += x, y: prev.pos.y += y }, 
            collided
        }));
    }
    const resetBlock = useCallback(() => {
        setBlock({
            pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false
        });
    } , []);

    return {block, updateBlockPos, resetBlock, blockRotate};
}