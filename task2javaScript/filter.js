
let booksArray = [
    {
        title: 'Книга 1',
        price: 300
    },
    {
        title: 'Книга 2',
        price: 600
    },
    {
        title: 'Книга 3',
        price: 1500
    },
    {
        title: 'Книга 4',
        price: 399
    }
];

function filterBooks(books) {
    return books.filter(book => book.price < 400)
}

// Чтобы запустить код требуется раскомментить строку 26 и в терминале выполнить node filter.js предварительно находясь
// В папке проекта
// console.log(filterBooks(booksArray));