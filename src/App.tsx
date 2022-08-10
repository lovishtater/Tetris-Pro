import React, { useRef } from 'react';
import { createStage, isColliding } from './gameHelpers';

// components
import Display from './components/Display/Display';
import Stage from './components/Stage/Stage';
import StartButton from './components/StartButton/StartButton';

// Hooks
import { useBlock } from './hooks/useBlock';
import { useStage } from './hooks/useStage';
import { useInterval } from './hooks/useInterval';
import { useGameStats } from './hooks/useGameStats';

// Styles
import {StyledTetrisWrapper, StyledTetris, H1} from "./App.styles";
import { STAGE_HEIGHT, STAGE_WIDTH } from './setup';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState<boolean>(true);

  const gameArea = useRef<HTMLDivElement>(null);

  const {block, updateBlockPos, resetBlock, blockRotate} = useBlock();
  const {stage, setStage, rowsCleared} = useStage(block, resetBlock);
  const {score, rows, level, setLevel, setScore, setRows} = useGameStats(rowsCleared);

  const moveBlock = (dir : number) => {
    if (!isColliding(block, stage, {x: dir, y: 0})) {
      updateBlockPos({x: dir, y: 0, collided: false});
    }
  }

  const move = ({ keyCode, repeat }: { keyCode: number, repeat: boolean }) : void => {
    if (keyCode === 37) {
      moveBlock(-1);
    } else if (keyCode === 39) {
      moveBlock(1);
    } else if (keyCode === 40) {
      setDropTime(30)
    } else if (keyCode === 38 && !repeat) {
      blockRotate(stage);
    }
  }

  const keyUp = ({ keyCode }: { keyCode: number }) : void => {
    if(!gameOver && keyCode === 40) {
      setDropTime(1000);
  }
}

  const handleStartGame = () : void => {
    // focus the window 
    if(gameArea.current) gameArea.current.focus();
    setStage(createStage());
    setDropTime(1000);
    resetBlock();
    setScore(0);
    setRows(0);
    setLevel(1);
    setGameOver(false);
  }

  const drop = (): void => {

    if(rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!isColliding(block, stage, {x: 0, y: 1})) {
      updateBlockPos({x: 0, y: 1, collided: false});
    } else {
      // game over
      if (block.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updateBlockPos({x: 0, y: 0, collided: true});
    }
  }

  const mobileControlStart = (e: any): void => {
    if (e.target?.id === "cell" && !gameOver && !isColliding(block, stage, {x: -1, y: 0})) {
      if (e.target.getAttribute("type") != 0 && e.target.className.includes("clear")) {
        blockRotate(stage);
      } else if (e.target.getAttribute("data-key") > STAGE_WIDTH * (STAGE_HEIGHT - 2)) {
        setDropTime(30);
      } else if (
        e.touches[0].clientX < window.innerWidth / 2 &&
        e.touches[0].clientY < (window.innerHeight / 3) * 2
      ) {
        moveBlock(-1);
      } else if (
        e.touches[0].clientX > window.innerWidth / 2 &&
        e.touches[0].clientY < (window.innerHeight / 3) * 2
      ) {
        moveBlock(1);
      }
    }
  };

  const mobileControlEnd = (e: any): void => {
    if (e.target?.id === "cell" && !gameOver) {
      setDropTime(1000);
    }
  }

  useInterval(() => {
    drop();
  } , dropTime);

  return (
    <StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea} onTouchStart={mobileControlStart} onTouchEnd={mobileControlEnd}>
      <StyledTetris>
        <H1>Tetris Pro</H1>
        <div className="display">
          {gameOver ? (
            <StartButton callback={handleStartGame} />
          ) : (
            <>
              <Display text={`Score: ${score}`} gameOver={false} />
              <Display text={`Rows: ${rows}`} gameOver={false} />
              <Display text={`Level: ${level}`} gameOver={false} />
            </>
          )}
        </div>
        <Stage stage={stage} />
      <a href="https://github.com/lovishtater/Tetris-Pro" target="_blank">
        <img src="https://img.shields.io/github/stars/lovishtater/Tetris-Pro?style=social" alt="Github Stars" />
      </a>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
