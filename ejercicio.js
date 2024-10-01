//Almacenando el elemento cuyo id es cardContainer en una variable constante llamada cardContainer,
//realizar las siguientes acciones:
const cardContainer = document.getElementById('contenedorCartas');

// 1) Eliminar el primer elemento hijo desde el padre
cardContainer.removeChild(cardContainer.firstElementChild);

// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass"
const redCard = document.querySelector('.cards.redClass');
if (redCard) {
    redCard.remove();
}

// 3) Crear un elemento h1 con vuestro nombre
const h1Nombre = document.createElement('h1');
h1Nombre.textContent = 'Santiago Pérez';

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna
const enlaceVedruna = document.createElement('a');
enlaceVedruna.textContent = 'Vedruna';
enlaceVedruna.href = 'https://vedrunasevilla.org/';

// 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"
const botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';
botonJoker.textContent = 'boton';

// 6) Crear un elemento div cuya clase sea "cards greenClass"
const divGreenCard = document.createElement('div');
divGreenCard.classList.add('cards', 'greenClass');

// 7) Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente
divGreenCard.appendChild(h1Nombre);
divGreenCard.appendChild(enlaceVedruna);
divGreenCard.appendChild(botonJoker);

// 8) Añadir a cardContainer el div del apartado anterior
cardContainer.appendChild(divGreenCard);
