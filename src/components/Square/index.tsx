import LevelModal from "components/LevelModal";
import * as S from "./styles";
import { FC, useState } from "react";
import { useYear } from "contexts/useYear";
import { format, parseISO } from "date-fns";

interface SquareI {
  day: string;
  initialLevel: number;
}

const Square: FC<SquareI> = ({ day, initialLevel }) => {
  const { user, setUser } = useYear()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [level, setLevel] = useState<number | undefined>(initialLevel);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const updateUser = (newDayValue: number, targetMonth: string, targetDay: string) => {
    setUser((prevUsers) => {
      const updatedUsers = { ...prevUsers };

      updatedUsers.year[targetMonth][targetDay] = newDayValue;
  
      return updatedUsers;
    });
  };

  const handleOk = (newLevel: number | undefined) => {
    const month = format(parseISO(day), 'MMMM')

    updateUser(newLevel || 0, month, day)
    setLevel(newLevel);
    
    closeModal();
  };

  return (
    <>
      <LevelModal
        day={day}
        initialLevel={initialLevel}
        open={isModalOpen}
        handleCancel={closeModal}
        handleOk={handleOk}
      />
      <S.Square onClick={openModal} level={level} />
    </>
  );
};

export default Square;
