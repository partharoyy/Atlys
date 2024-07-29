import { createContext, ReactNode } from 'react';
import { user_list } from '../assets/UserList';
import { User } from '../types/User';

interface UserContextType {
  user_list: User[];
}

const defaultContextValue: UserContextType = {
  user_list: [],
};

export const UserContext = createContext<UserContextType>(defaultContextValue);

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const contextValue: UserContextType = {
    user_list,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
