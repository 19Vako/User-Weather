"use client";
import { createContext, useState, ReactNode, useContext } from "react";

export type StoreType = {
  users: any[];
  setUsers: React.Dispatch<React.SetStateAction<any[]>>;

  savedUsers: any[];
  setSavedUsers: React.Dispatch<React.SetStateAction<any[]>>;

  userWeathet: any[];
  setUserWeathet: React.Dispatch<React.SetStateAction<any[]>>;
};

const Store = createContext<StoreType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [savedUsers, setSavedUsers] = useState<any[]>([]);
  const [userWeathet, setUserWeathet] = useState<any[]>([]);

  return (
    <Store.Provider
      value={{
        users,
        setUsers,
        savedUsers,
        setSavedUsers,
        userWeathet,
        setUserWeathet,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const useStore = (): StoreType => {
  const context = useContext(Store);
  if (!context) {
    throw new Error("useStore must be used within a Provider");
  }
  return context;
};
