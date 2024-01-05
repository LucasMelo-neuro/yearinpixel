import styled, { css } from 'styled-components'

interface SquareColors {
  level?: number
}

interface ColorMap {
  [key: number]: string;
}

const colors: ColorMap = {
  1: '#FA4F4F',
  2: '#F58C1F',
  3: '#FACC52',
  4: '#9AAA3F',
  5: '#63A259',
};

export const Square = styled.button<SquareColors>`
  width: 14px;
  height: 14px;

  outline: none;

  border: 1px solid #fff;
  border-color: ${({ level }) => (level && colors[level]) || '#fff'};
  border-radius: 2px;

  background: ${({ level }) => (level && colors[level]) || 'transparent'};

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`