import { FC, useContext } from 'react';
import { UserType } from '../../types/UserType';
import styles from './UserCard.module.css';
import bookIMG from '../../assets/book.jpg'
import { MainContext } from '../../Provider/MainContext';

interface UserCardProps {
    user: UserType,
}

export const UserCard: FC<UserCardProps> = ({user}) => {
    const context = useContext(MainContext);
    if (!context) {
        throw new Error("Проблема с контекстом")
    }

    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={bookIMG} alt="TESTIMAGE" />
            <div className={styles.card__wrapper}>
                <div className={styles.card__content}>
                    <h2 className={styles.card__author}>{user.title}</h2>
                    <p className={styles.card__descr}>{user.completed}</p>
                    <div className={styles.order_instr}>
                </div>
                </div>
            </div>
        </div>
    )
}