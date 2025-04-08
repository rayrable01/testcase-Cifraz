import { createContext, FC, ReactNode } from "react";
import { useUsersList } from "../hooks/useUsersList";
import { UserArrayType} from "../types/UserType";

interface MainContextType {
    data: {
        data: UserArrayType,
        isLoading: boolean,
        isError: boolean,
    },
}

export const MainContext = createContext<MainContextType | null>(null);


interface MainProviderProps {
    children: ReactNode;
}

export const MainProvider: FC<MainProviderProps> = ({children}) => {
    const data = useUsersList();


    return (
        <MainContext.Provider value={{
            data,
            }}>
            {children}
        </MainContext.Provider>
    )
}