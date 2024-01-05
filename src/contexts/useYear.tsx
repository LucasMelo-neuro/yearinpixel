import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { MonthObject, UserI, createObjectByMonths } from "utils/functions";

interface YearContextData {
  vertical: boolean;
  setVertical: Dispatch<SetStateAction<boolean>>;
  user: UserI;
  setUser: Dispatch<SetStateAction<UserI>>;
}

const YearContext = createContext({} as YearContextData);

interface YearProviderProps {
  children: ReactNode;
}

const createYearObject = () => {
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  const myObject: MonthObject = createObjectByMonths(startDate, endDate);
  return myObject;
};

export function YearProvider({ children }: YearProviderProps): JSX.Element {
  const [vertical, setVertical] = useState(true);

  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  const initialUser = storedUser
    ? JSON.parse(storedUser)
    : { year: createYearObject(), name: "" };

  const [user, setUser] = useState<UserI>(initialUser);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const contextValue: YearContextData = {
    user,
    setUser,
    vertical,
    setVertical,
  };

  return (
    <YearContext.Provider value={contextValue}>{children}</YearContext.Provider>
  );
}

export function useYear(): YearContextData {
  const context = useContext(YearContext);

  return context;
}
