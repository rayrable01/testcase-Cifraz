import { useContext } from "react"
import { MainContext } from "../../Provider/MainContext"
import { BookCard } from "../BookCard/BookCard";
import { Link } from "react-router-dom";
import styles from './Favorites.module.css'

export const Favorites = () => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error('Проблема в контексте Favorites')
    }

    const {favorites} = context;

    return (
        <>
        <Link to={'/'} className={styles.favorites__link}>Обратно к списку</Link>
        <ul className={styles.favorites__list}>
            {favorites && favorites.length > 0 ? (
                favorites.map(book => (
                    <li key={book.id}>
                        <BookCard book = {book} price = {1000} />
                    </li>
                ))
            ) : (
                <div className={styles.favorites__empty}>
                    Список книг пуст.
                </div>
            )}
        </ul>
        </>
    )
}