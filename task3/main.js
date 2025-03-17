document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.querySelector('.favorites__list');
    const favoritesListTITLES = ['Любимая книга', 'Лялялля'];

    function renderFavorites(array) {
        favoritesList.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            h3.textContent = `Название: ${array[i]}. / ID: ${i}`
    
            li.append(h3);
            favoritesList.append(li);
        }
    }


    document.querySelectorAll('.card__buton').forEach(button => button.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        const bookTitle = card.querySelector('.card__author').textContent;
        
    
        if (!favoritesListTITLES.includes(bookTitle)) {
            favoritesListTITLES.push(bookTitle);
            renderFavorites(favoritesListTITLES);
        };
    
        }))

    renderFavorites(favoritesListTITLES);
});

// ДОБАВЛЕНИЕ ПРОИСХОДИТ ТОЛЬКО ТЕХ КНИГ КОТОРЫЕ ЕЩЁ НЕ ДОБАВЛЕНЫ.