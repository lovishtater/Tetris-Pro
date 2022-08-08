import styled from 'styled-components';

type Props = {
  gameOver?: boolean;
};

export const StyledDisplay = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 10px 0;
  padding: 10px;
  border: 2px solid #777;
  min-height: 10px;
  width: 100px;
  border-radius: 10px;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
