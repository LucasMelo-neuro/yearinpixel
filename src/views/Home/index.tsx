import { Space, Tag } from "antd";
import * as S from "./styles";
import Link from "next/link";

const techs = [
  "Next",
  "Typescript",
  "Styled Components",
  "Ant Design",
  "React Query",
  "Plop",
];

const Home = () => (
  <S.Wrapper>
    <S.Title>My favourite Next boilerplate 🌱</S.Title>
    <S.Subtitle>All configured to develop a high-level interface.</S.Subtitle>

    <Space size={[0, 8]} wrap>
      {techs.map((tag) => (
        <Tag key={tag} color="#7B9668">
          {tag}
        </Tag>
      ))}
    </Space>

    <Link
      href="https://github.com/lucasgmelo/myfavboilerplate"
      target="__blank"
    >
      Github template
    </Link>
  </S.Wrapper>
);

export default Home;
