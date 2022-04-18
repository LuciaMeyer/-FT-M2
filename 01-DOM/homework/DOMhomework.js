// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems = []; // [{...},{...}{...}] --> newToDo {description: undefined, complete: true}

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

let name = document.querySelector('#createdBy');
name.innerHTML = name.innerHTML + ' Lucia';

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo (description) {
  this.description = description;
  this.complete = false;
}
// let newToDo = new ToDo() --> newToDo {description: undefined, complete: false}


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

ToDo.prototype.completeToDo = function() {
  this.complete = true;
}
// newToDo.completeToDo() --> newToDo {description: undefined, complete: true}

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {

  let toDoShell = document.createElement('div');   
  toDoShell.className = 'toDoShell';

  let toDoText = document.createElement('span');  
  toDoText.innerText = todo.description;            
  //toDoText.id = index;

  let cBox = document.createElement('input');
  cBox.type = 'checkbox';
  cBox.id = index;
  cBox.onclick = completeToDo;
  cBox.className = 'completeCheckbox';
  
  if(todo.complete) {
    toDoText.className = 'completeText';
    cBox.checked = true;
  }

  toDoShell.appendChild(toDoText);               
  toDoShell.appendChild(cBox);
  //toDoText.onclick = completeToDo;   
  return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {              //  [{...},{...}{...}] --> newToDo {description: undefined, complete: true}
  let nuevoArray = toDos.map(buildToDo);
  return nuevoArray;
}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)

function displayToDos() {
  let toDoContainer = document.getElementById('toDoContainer'); // selecciono id toDoContainer
  toDoContainer.innerHTML = '';                                 // le digo es strings vacía
  let arrayItems = buildToDos(toDoItems);                       // aplico la función masiva al array del inicio
  for (let i = 0; i < arrayItems.length; i++) {                   
    toDoContainer.appendChild(arrayItems[i]);                   // al div id 'toDoContainer' le digo que dentro tiene cada objeto del array
  }                                                             // {description: undefined, complete: true}
}

// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla
// <input type="button" value="Botón">

function addToDo() {   // agrega un nuevo toDo al arreglo y al invocar displayToDos recorre el arreglo y crea los divs y span

  let toDoInput = document.querySelector('#toDoInput');
  let newToDo = new ToDo(toDoInput.value); 
  toDoItems.push(newToDo);           
  toDoInput.value = '';
  displayToDos();
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

let button = document.querySelector('#addButton');
button.onclick = addToDo;     // cuando haga clich ejecuta la función se puede usar button.addEventListener('click', addToDo)


// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  
  const index = event.target.id;   // me trae el indice de los inputs creados
  toDoItems[index].completeToDo()  // tomo una instancia de la clase toDo y le aplico el método
  displayToDos();    
}


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'
displayToDos();


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //

if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
