import {STAGE} from './components/Stage/Stage';
import { BLOCK } from './hooks/useBlock';

import { STAGE_WIDTH, STAGE_HEIGHT } from './setup';
import { TETROMINOS } from './setup';
export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const randomTetromino = () => {
  const tetrominos = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'] as (keyof typeof TETROMINOS)[];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

export const isColliding = (block: BLOCK, stage: STAGE , {x : moveX, y : moveY} : {x: number, y: number}) => {
  for (let y = 0; y < block?.tetromino?.length; y++) {
    for (let x = 0; x < block?.tetromino[y]?.length; x++) {
      // we ignore empty cells
      if (block.tetromino[y][x] !== 0) {
        if (
          // check if we are outside the stage
          !stage[y + block.pos.y + moveY] ||
          !stage[y + block.pos.y + moveY][x + block.pos.x + moveX] ||
          stage[y + block.pos.y + moveY][x + block.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
