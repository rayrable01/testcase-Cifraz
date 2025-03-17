import { useQuery } from "@tanstack/react-query";
import { BookArrayType } from "../types/BookType"
import { fetchBooks } from "../api/booksRequest";
import { queryClient } from "../api/queryClient";

interface ResponseBooks {
    data: BookArrayType;
    isLoading: boolean;
    isError: boolean;
}

export const useBooksList = (): ResponseBooks => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['booksList'],
        queryFn: () => fetchBooks(),
    }, queryClient);

    return {data, isError, isLoading};
}