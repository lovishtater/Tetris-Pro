import React from 'react';
import { createStage } from './gameHelpers';

// components
import Display from './components/Display/Display';
import Stage from './components/Stage/Stage';
import StartButton from './components/StartButton/StartButton';

// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  const [dropTime, setDropTime] = React.useState<null | number>(null);
  const [gameOver, setGameOver] = React.useState<boolean>(true);
  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>
        <div className="display">
          {gameOver ? (
            <>
            <Display gameOver={gameOver} text={'Game Over'} />
            <StartButton callback={()=>null} />
            </>
          ) : (
            <>
              <Display gameOver={gameOver} text={"text"} />
            </>
          )}
        </div>
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
