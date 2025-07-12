function changeTheme() {
const card = document.querySelector('.card');
const currentColor = card.style.backgroundColor;

if (currentColor === 'white' || currentColor === '') {
    card.style.backgroundColor = '#333';
    card.style.color = 'white';
} else {
    card.style.backgroundColor = 'white';
    card.style.color = 'black';
}
}
