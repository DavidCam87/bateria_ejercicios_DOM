//DESCOMENTAR PARA EJECUTAR EL CODIGO

//!1.1 Basandote en el array siguiente, crea una lista ul > li
//!dinámicamente en el html que imprima cada uno de los paises.
/* const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul');
for (const country of countries) {
  const li = document.createElement('li');
  li.innerText = country;
  ul.appendChild(li);
}
document.body.appendChild(ul); */

//!1.2 Elimina el elemento que tenga la clase .fn-remove-me.
/* const del = document.querySelector('.fn-remove-me');
del.remove(); */

//!1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//!en el div de html con el atributo data-function="printHere".
/* const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul = document.createElement('ul');
for (const car of cars) {
  const li = document.createElement('li');
  li.innerText = car;
  ul.appendChild(li);
  document.querySelector('[data-function="printHere"]').appendChild(ul);
} */

//!1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//!h4 para el titulo y otro elemento img para la imagen.
const countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
/* for (const country of countries) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  h4.innerText = country.title;
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
} */

//!1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//!elemento de la serie de divs.
/* const deleteButton = document.createElement('button');
deleteButton.innerText = 'Delete Last Div';
deleteButton.addEventListener('click', () => {
  const divs = document.querySelectorAll('div');
  if (divs.length > 0) {
    const lastDiv = divs[divs.length - 1];
    lastDiv.remove();
  }
});
document.body.appendChild(deleteButton); */

//!1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//!divs que elimine ese mismo elemento del html.

/* for (const country of countries) {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  h4.innerText = country.title;
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete Div';
  deleteButton.addEventListener('click', () => {
    div.remove();
  });

  div.appendChild(deleteButton);
  document.body.appendChild(div);
} */



