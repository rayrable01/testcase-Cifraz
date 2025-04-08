import { useQuery } from "@tanstack/react-query";
import { UserArrayType } from "../types/UserType"
import { fetchUsers } from "../api/usersRequest";
import { queryClient } from "../api/queryClient";

interface ResponseUsers {
    data: UserArrayType;
    isLoading: boolean;
    isError: boolean;
}

export const useUsersList = (): ResponseUsers => {
    const {data, isError, isLoading} = useQuery({
        queryKey: ['usersList'],
        queryFn: () => fetchUsers(),
    }, queryClient);

    return {data, isError, isLoading};
}