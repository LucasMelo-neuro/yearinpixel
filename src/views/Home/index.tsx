import * as S from "./styles";
import Square from "components/Square";
import {
  Emoji,
  EmojiMeh,
  EmojiLaugh,
  EmojiSadSlight,
  EmojiSad,
} from "@styled-icons/fluentui-system-filled";
import { useYear } from "contexts/useYear";
import { useEffect, useState } from "react";
import { countValuesOverall } from "utils/functions";

const Home = () => {
  const { user, vertical } = useYear();
  const [valuesOverall, setValuesOverall] = useState<{
    [value: number]: number;
  }>(() => {
    const result = countValuesOverall(user.year);
    return result;
  });

  useEffect(() => {
    setValuesOverall(() => {
      const result = countValuesOverall(user.year);
      return result;
    });
  }, [user]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <S.Container>
      <div>
        <h1>Ano em pixels</h1>
        <p>Avalie os dias do seu ano</p>
      </div>

      <S.Wrapper>
        <S.LabelDaysGrid vertical={vertical}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p>30</p>
          <p>31</p>
        </S.LabelDaysGrid>
        <S.LabelMonthGrid vertical={vertical}>
          <p>J</p>
          <p>F</p>
          <p>M</p>
          <p>A</p>
          <p>M</p>
          <p>J</p>
          <p>J</p>
          <p>A</p>
          <p>S</p>
          <p>O</p>
          <p>N</p>
          <p>D</p>
        </S.LabelMonthGrid>
        <S.MonthGrid vertical={vertical}>
          {months.map((month) => (
            <S.DaysGrid key={month} vertical={vertical}>
              {Object.entries(user.year[month]).map(([day, level]) => (
                <Square key={day} day={day} initialLevel={level} />
              ))}
            </S.DaysGrid>
          ))}
        </S.MonthGrid>
      </S.Wrapper>

      <S.Icons>
        <S.Icon level={1}>
          <EmojiSad size={36} />
          <p>{valuesOverall["1"] || '0'}</p>
        </S.Icon>
        <S.Icon level={2}>
          <EmojiSadSlight size={36} />
          <p>{valuesOverall["2"] || '0'}</p>
        </S.Icon>
        <S.Icon level={3}>
          <EmojiMeh size={36} />
          <p>{valuesOverall["3"] || '0'}</p>
        </S.Icon>
        <S.Icon level={4}>
          <Emoji size={36} />
          <p>{valuesOverall["4"] || '0'}</p>
        </S.Icon>
        <S.Icon level={5}>
          <EmojiLaugh size={36} />
          <p>{valuesOverall["5"] || '0'}</p>
        </S.Icon>
      </S.Icons>
    </S.Container>
  );
};

export default Home;
