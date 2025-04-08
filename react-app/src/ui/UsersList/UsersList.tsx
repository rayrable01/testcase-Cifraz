import { useContext } from 'react';
import styles from './UsersList.module.css';
import { MainContext } from '../../Provider/MainContext';
import { UserCard } from '../UserCard/UserCard';



export const UsersList = () => {
    const context = useContext(MainContext);
    
    if (!context) {
        throw new Error("Проблема с контекстом")
    }

    const {data} = context;

    if (data.isLoading) {
        return (
            <div className={styles.div__loading}>
                ...Загрузка
            </div>
        )
    } else if (data.isError) {
        return (
            <div className={styles.div__error}>
                Извините! Ошибка загрузки данных.
            </div>
        )
    }


    return (
        <>
        <ul className={styles.wrapper}>
            {data.data && data.data.length > 0 ? (
                data.data.map(user => (
                    <li key={user.id} className={styles.book__li}>
                        <UserCard user = {user} />
                    </li>
                )) 
            ) : (
                <div className={styles.book__list_error}>
                    Извините произошла ошибка!
                </div>
            )}
        </ul>
        </>
    )
}