import styled from "styled-components";

const MONTHS_GAP: string = '4px';
const DAYS_GAP: string = '4px';
const SQUARE_SIZE: string = '14px';

const colors = {
  1: '#FA4F4F',
  2: '#F58C1F',
  3: '#FACC52',
  4: '#9AAA3F',
  5: '#63A259'
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  h1 {
    color: white;
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;

  display: grid;
  grid-template-areas: 
    "x a"
    "b c"
  ;
  grid-template-rows: ${SQUARE_SIZE} auto;
  grid-template-columns: ${SQUARE_SIZE} auto;
`;

export const MonthGrid = styled.div<{vertical: boolean}>`
  display: grid;

  grid-template-columns: ${({ vertical }) => vertical ? `repeat(12, ${SQUARE_SIZE})` : ''};
  grid-template-rows: ${({ vertical }) => vertical ? '' : `repeat(12, ${SQUARE_SIZE})`};

  grid-gap: ${MONTHS_GAP};
  grid-area: c;

  padding: 8px 16px;
`;

export const LabelDaysGrid = styled.div<{vertical: boolean}>`
  display: grid;
  grid-gap: ${DAYS_GAP};

  grid-template-columns: ${({ vertical }) => vertical ? '' : `repeat(31, ${SQUARE_SIZE})`};
  grid-template-rows: ${({ vertical }) => vertical ? `repeat(31, ${SQUARE_SIZE})`: ''};

  p {
    color: #fff;
    font-size: 14px;
  }

  grid-area: ${({ vertical }) => vertical ? 'b': 'a'};
  padding: ${({ vertical }) => vertical ? '8px 0 0 0': ' 0 0 0 16px'};
`;

export const LabelMonthGrid = styled.div<{vertical: boolean}>`
  display: grid;

  grid-area: ${({ vertical }) => vertical ? 'a': 'b'};
  grid-gap: ${MONTHS_GAP};

  p {
    color: #fff;
    font-size: 14px;
  }

  grid-template-columns: ${({ vertical }) => vertical ? `repeat(12, ${SQUARE_SIZE})` : ''};
  grid-template-rows: ${({ vertical }) => vertical ? '' :`repeat(12, ${SQUARE_SIZE})`};

  padding: ${({ vertical }) => vertical ? ' 0 0 0 16px' : '8px 0 0 0'};
`;

export const DaysGrid = styled.div<{vertical: boolean}>`
  display: flex;
  gap: ${DAYS_GAP};
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'rows'};
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
`;

export const Icon = styled.div<{ level: 1 | 2 | 3 | 4 | 5}>`
  color: ${({ level }) => colors[level]};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  p {
    font-size: 18px;
  }
`;