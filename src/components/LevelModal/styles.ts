import styled from "styled-components";

const colors: { [key: string]: string } = {
  "1": "#FA4F4F",
  "2": "#F58C1F",
  "3": "#FACC52",
  "4": "#9AAA3F",
  "5": "#63A259",
};

export const Wrapper = styled.main``;

export const RateContainer = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 8px;
  
  span {
    font-size: 12px !important;
  }
`;

export const Icon = styled.div<{
  active?: boolean;
  level: 1 | 2 | 3 | 4 | 5;
}>`
  color: ${({ active, level}) => active ? colors[level] : '#43464D'};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ level}) => colors[level]};
  }
`;
