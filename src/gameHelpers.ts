import {STAGE} from './components/Stage/Stage';
import { PLAYER } from './hooks/usePlayer';

import { STAGE_WIDTH, STAGE_HEIGHT } from './setup';
import { TETROMINOS } from './setup';
export const createStage = () => Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

export const randomTetromino = () => {
  const tetrominos = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'] as (keyof typeof TETROMINOS)[];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

export const isColliding = (player: PLAYER, stage: STAGE , {x : moveX, y : moveY} : {x: number, y: number}) => {
  for (let y = 0; y < player.tetromino.length; y += 2) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // we ignore empty cells
      if (player.tetromino[y][x] !== 0) {
        if (
          // check if we are outside the stage
          !stage[y + player.pos.y + moveY] ||
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
