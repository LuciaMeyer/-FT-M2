
/* OBJETIVO DE CADA FUNCIÓN

1) el usuario llama a $ para seleccionar elementos de su webpage según un selector específico.
2) $ llama a matchFunctionMaker que usa a selectorTypeMatcher q identifica el tipo de selector seleccionado 
- selectorTypeMatcher('.classOne') --> es una 'class'
- matchFunctionMaker crea una función que devuelve true si lo encuentra
- matchFunctionMaker('.classOne') --> true (está la clase en el HTML)
3) traverseDomAndCollectElements recorre el DOM y devuelve un array con los elementos HTML de esa clase

/*________________________________________________________________________________________
EXPLICACIÓN LU:
el usuario llama a $ para seleccionar elementos de su webpage según un selector específico.
*/
var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

/*________________________________________________________________________________________
EXPLICACIÓN LU:
la función recibe un selector (css) y devuelve una función, una "maquina de encontrar"
la función "maquina" recibe un elemento html y lo compara con el selector,
retorna true si lo encuentra o false si no lo encuentra.
Dependiendo de qué selector sea entra a cada if
en el caso de .classOne entra al if de selectorType === "class"
busca en cada nodo del HTML una clase con el nombre del selector .classOne
si lo encuentra retorna true */ 

function matchFunctionMaker(selector) {

  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    matchFunction = (eleHTML) => '#' + eleHTML.id === selector;
  }
  if (selectorType === "class") {
    matchFunction = function (eleHTML) {
      let arrClass = eleHTML.classList; // como puede tener + de 1 clase uso class list q devuelve un array de las clases     
      for (let i = 0; i < arrClass.length; i++) {
        if ('.' + arrClass[i] === selector)
          return true;
      }
      return false;
    };
  }
  if (selectorType === "tag.class") { // ej: div.classOne
    matchFunction = function (eleHTML) {
      let [t, c] = selector.split('.'); // split --> ['div', 'classOne'] guardo uno en cada variable t y c      
      return matchFunctionMaker(t)(eleHTML) && matchFunctionMaker('.' + c)(eleHTML);
    };
    // matchFunctionMaker(t) devuelve la función nmatchFunction por eso la vuelvo a invocar con ese elemento
    // para saber si ese tag existe en el HTML, retorna true
  }
  if (selectorType === "tag") {
    matchFunction = function (eleHTML) {
      return eleHTML.localName === selector;
    };
  }
  return matchFunction; // devuelvo la función (maquina de encontrar)     
}

/*________________________________________________________________________________________
EXPLICACIÓN LU:
la función recibe un string del selector (css) como los ej de abajo
y devuelve un string que determina qué tipo de selector es
RECIBE --> RETORNA
'#hola'--> 'id'  
'.hola' --> 'class'
'hola' --> 'tag'
'hola.hola' --> 'tag class' */

function selectorTypeMatcher(selector) {
  // tu código aquí
  if (selector[0] === '#')
    return 'id';
  if (selector[0] === '.')
    return 'class';
  if (selector.split('.').length > 1)
    return 'tag.class';
  return 'tag';
}

/*________________________________________________________________________________________
EXPLICACIÓN LU:
Esta función recibe una función matchFunc que es la misma que la función 2:
busca la clase en los elementos y devuelve true or false si están
y recibe como 2do parámetro un elemento incial startEl.
Si el elemento que estoy recorriendo tiene la calse (matchFunc es true)
entonces pusheo el elemento dentro de resultSet y aplico recursión a los hijos
importante ir concatenando cada resultSet de las recursiones
*/

function traverseDomAndCollectElements(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined")
    startEl = document.body;
  if (matchFunc(startEl))
    resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let eFounds = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...eFounds];
  }
  return resultSet;
}




