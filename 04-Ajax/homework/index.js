/* localhost:5000/amigos --> servidor de donde está sacando los datos, puedo pedirlo por id también localhost:5000/amigos/1 */


$('#boton').click(function(){
    $.get('http://localhost:5000/amigos', function(data){        
        data.forEach(e => {
            let li = document.createElement('li');
            let containerList = document.querySelector('#lista');
            containerList.appendChild(li)
            li.innerHTML = e.name;
            // $('#lista').append(`<li>${e.name}</li>`); así lo hizo Martina
        });
    })
    $('#lista').empty();
})




$('#search').click(function(){
    
    let inp = document.querySelector('#input').value;
    $.get(`http://localhost:5000/amigos/${inp}`, function(data){       
      
        let sp = document.querySelector('#amigo')
        sp.innerHTML = data.name;
        // $('#amigo').text(`${data.name}`) así lo hizo Martina
        
       
    })
})