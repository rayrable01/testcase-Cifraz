import { createContext, FC, ReactNode, useState } from "react";
import { useBooksList } from "../hooks/useBooksList";
import { BookArrayType} from "../types/BookType";

interface MainContextType {
    data: {
        data: BookArrayType,
        isLoading: boolean,
        isError: boolean,
    },
    price: number,
    favorites: BookArrayType,
    setFavorites: React.Dispatch<React.SetStateAction<BookArrayType>>;

}

export const MainContext = createContext<MainContextType | null>(null);


interface MainProviderProps {
    children: ReactNode;
}

export const MainProvider: FC<MainProviderProps> = ({children}) => {
    const data = useBooksList();
    const [favorites, setFavorites] = useState<BookArrayType>([]);
    const price = 1000;


    return (
        <MainContext.Provider value={{
            data,
            price,
            favorites,
            setFavorites,
            }}>
            {children}
        </MainContext.Provider>
    )
}