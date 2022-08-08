import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0 auto;

  .display {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 380px;
  }

  a {
    margin-top: 10px;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  letter-spacing: 2px;
  font-family: 'Bungee', cursive;
  color: #fff;
  animation: glitch-shadow 5s infinite ease-in-out;

  @keyframes glitch-shadow {
    0% {
      text-shadow: .08em 0 0 #8C52FF, -.08em 0 0 #008037, 0 .08em 0 #FF1616, 0 -.08em 0 #008037, .08em 0 0 #FF1616, -.08em 0 0 #008037, 0 .08em 0 #FF1616, 0 -.08em 0 #008037;
    }
    15% {
      text-shadow: .08em 0 0 #008037, -.08em 0 0 #8C52FF, 0 .08em 0 ##FFDE59, 0 -.08em 0 #8C52FF, .08em 0 0 #008037, -.08em 0 0 #8C52FF, 0 .08em 0 #008037, 0 -.08em 0 #8C52FF;

    30% {
      text-shadow: .08em 0 0 #8C52FF, -.08em 0 0 #FFDE59, 0 .08em 0 #8C52FF, 0 -.08em 0 #008037, .08em 0 0 #8C52FF, -.08em 0 0 #FFDE59, 0 .08em 0 #FF1616, 0 -.08em 0 #FFDE59;
    }
    45% {
      text-shadow: .08em 0 0 #FFDE59, -.08em 0 0 #FF1616,  0 .08em 0 #FFDE59, 0 -.08em 0 #FF914D, .08em 0 0 #FFDE59, -.08em 0 0 #FF1616, 0 .08em 0 #FFDE59, 0 -.08em 0 #FF1616;
    }
    60% {
      text-shadow: .08em 0 0 #FF1616, -.08em 0 0 #008037, 0 .08em 0 #FF1616, 0 -.08em 0 #fff, .08em 0 0 #FF1616, -.08em 0 0 #008037, 0 .08em 0 #FF1616, 0 -.08em 0 #8C52FF;
    }
    75% {
      text-shadow: .08em 0 0 #008037, -.08em 0 0 #8C52FF, 0 .08em 0 #FFDE59, 0 -.08em 0 #8C52FF, .08em 0 0 #008037, -.08em 0 0 #8C52FF, 0 .08em 0 #008037, 0 -.08em 0 #8C52FF;
    }
    90% {
      text-shadow: .08em 0 0 #8C52FF, -.08em 0 0 #FFDE59, 0 .08em 0 #8C52FF, 0 -.08em 0 #008037, .08em 0 0 #8C52FF, -.08em 0 0 #FFDE59, 0 .08em 0 #FF1616, 0 -.08em 0 #FFDE59;
    }
    100% {
      text-shadow: .08em 0 0 #FFDE59, -.08em 0 0 #FF1616, 0 .08em 0 #FFDE59, 0 -.08em 0 #FF914D, .08em 0 0 #FFDE59, -.08em 0 0 #FF1616, 0 .08em 0 #FFDE59, 0 -.08em 0 #FF1616;
    }

  }
`;
