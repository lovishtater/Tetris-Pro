import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 25px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 25px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: rgba(0, 0, 0, 0.5);
`;
