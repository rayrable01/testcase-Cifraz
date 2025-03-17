import { useContext } from 'react';
import styles from './BookList.module.css';
import { BookCard } from '../BookCard/BookCard';
import { MainContext } from '../../Provider/MainContext';
import { Link } from 'react-router-dom';



export const BookList = () => {
    const context = useContext(MainContext);
    
    if (!context) {
        throw new Error("Проблема с контекстом")
    }

    const {data, price} = context;

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
        <Link to={'/favorites'} className='Favorites__link'>К корзине</Link>
        <ul className={styles.wrapper}>
            {data.data && data.data.length > 0 ? (
                data.data.map(book => (
                    <li key={book.id} className={styles.book__li}>
                        <BookCard book = {book} price = {price} />
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