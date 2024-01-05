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
import { format, parseISO } from "date-fns";

interface ModalI {
  day: string;
  initialLevel: number;
  open: boolean;
  handleOk: (newLevel: number | undefined) => void;
  handleCancel: () => void;
}

const LevelModal: FC<ModalI> = ({ open, handleOk, handleCancel, day, initialLevel }) => {

  const [level, setLevel] = useState<number | undefined>(initialLevel);

  return (
    <Modal
      title={`Dia ${format(parseISO(day), 'dd/MM/yyyy')}`}
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

      <Button size="small" onClick={() => setLevel(0)}>Limpar</Button>
    </Modal>
  );
};

export default LevelModal;
