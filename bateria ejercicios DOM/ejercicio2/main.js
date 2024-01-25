//SOLO DESCOMENTARPARA EJECUTAR EL CODIGO

//!1.1 Inserta dinamicamente en un html un div vacio con javascript.
//const newDiv = document.createElement('div');
//document.body.appendChild(newDiv);

//!1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
//const divP = document.createElement('div');
//const p = document.createElement('p');
//divP.appendChild(p);
//document.body.appendChild(divP);

//!1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//	loop con javascript.
//const divP = document.createElement('div');

//for (let i = 0; i < 6; i++) {
//const p = document.createElement('p');
//divP.appendChild(p);
//}
//document.body.appendChild(divP);

//!1.4 Inserta dinamicamente con javascript en un html una p con el
//	texto 'Soy dinámico!'.
//const p = document.createElement('p');
//p.innerText = 'Soy dinámico!';
//document.body.appendChild(p);

//!1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
//const h2 = document.querySelector('.fn-insert-here');
//h2.innerText = 'Wubba Lubba dub dub';

//!1.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
/* const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (const app of apps) {
  const li = document.createElement('li');
  li.innerText = app;
  ul.appendChild(li);
  document.body.appendChild(ul);
} */

//!1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
//const del = document.querySelectorAll('.fn-remove-me');
//del.forEach((element) => {
//  element.remove();
//});

//!1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.
//const divs = document.querySelectorAll('div');
//const p = document.createElement('p');
//p.innerText = 'Voy en medio!';
//divs[0].insertAdjacentElement('afterend', p);

//!1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here
//const divs = document.querySelectorAll('div.fn-insert-here');
//console.log(divs);
//const p = document.createElement('p');
//p.innerText = 'Voy dentro!';
//divs.forEach((div) => {
// div.appendChild(p.cloneNode(true));
//})

