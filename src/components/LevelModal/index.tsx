import { Button, Modal, Rate } from "antd";
import { FC, useState } from "react";
import {
  Emoji,
  EmojiMeh,
  EmojiLaugh,
  EmojiSadSlight,
  EmojiSad,
} from "@styled-icons/fluentui-system-filled";
import * as S from "./styles";

interface ModalI {
  day: string;
  initialLevel: number;
  open: boolean;
  handleOk: (newLevel: 2 | 1 | 3 | 4 | 5 | undefined) => void;
  handleCancel: () => void;
}

const LevelModal: FC<ModalI> = ({ open, handleOk, handleCancel }) => {
  const customIcons: Record<number, React.ReactNode> = {
    1: <EmojiSad size={24} />,
    2: <EmojiSadSlight size={24} />,
    3: <EmojiMeh size={24} />,
    4: <Emoji size={24} />,
    5: <EmojiLaugh size={24} />,
  };

  const [level, setLevel] = useState<2 | 1 | 3 | 4 | 5 | undefined>(undefined);

  return (
    <Modal
      title="Dia 03/01/2024"
      open={open}
      onOk={() => handleOk(level)}
      onCancel={handleCancel}
      footer={[
        <>
          <Button>Cancelar</Button>
          <Button
            type="primary"
            key="submit"
            htmlType="submit"
            onClick={() => handleOk(level)}
          >
            Confirmar
          </Button>
        </>,
      ]}
    >
      <p>Avalie como foi o seu dia</p>

      <S.RateContainer>
        <S.Icon active={level === 1} level={1}>
          <EmojiSad onClick={() => setLevel(1)} size={24} />
        </S.Icon>
        <S.Icon active={level === 2} level={2}>
          <EmojiSadSlight onClick={() => setLevel(2)} size={24} />
        </S.Icon>
        <S.Icon active={level === 3} level={3}>
          <EmojiMeh onClick={() => setLevel(3)} size={24} />
        </S.Icon>
        <S.Icon active={level === 4} level={4}>
          <Emoji onClick={() => setLevel(4)} size={24} />
        </S.Icon>
        <S.Icon active={level === 5} level={5}>
          <EmojiLaugh onClick={() => setLevel(5)} size={24} />
        </S.Icon>
      </S.RateContainer>
    </Modal>
  );
};

export default LevelModal;
