import { FC, useContext } from 'react';
import { BookType } from '../../types/BookType';
import styles from './BookCard.module.css';
import bookIMG from '../../assets/book.jpg'
import { MainContext } from '../../Provider/MainContext';

interface BookCardProps {
    book: BookType,
    price: number,
}

export const BookCard: FC<BookCardProps> = ({book, price}) => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("Проблема с контекстом")
    }

    const {favorites, setFavorites} = context;

    const handleClickAdd = () => {
        setFavorites((prev) => [...prev, book]);
        console.log('Успешно добавлено :)')
    };

    const handleClickRemove = () => {
        setFavorites(favorites.filter(fav => fav !== book))
    }

    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={bookIMG} alt="TESTIMAGE" />
            <div className={styles.card__wrapper}>
                <div className={styles.card__content}>
                    <h2 className={styles.card__author}>{book.title}</h2>
                    <p className={styles.card__descr}>{book.body}</p>
                    <div className={styles.order_instr}>
                    <span className={styles.card__price}>{`${price}$`}</span>
                    {favorites.includes(book) ? (
                        <button className={styles.card__buton} type="button" onClick={handleClickRemove}>Удалить из корзины</button>
                    ) : (
                        <button className={styles.card__buton} type="button" onClick={handleClickAdd}>Добавить в корзину</button>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}