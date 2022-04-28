/* localhost:5000/amigos --> servidor de donde está sacando los datos, puedo pedirlo por id también localhost:5000/amigos/1 */
let url = 'http://localhost:5000/amigos'

function showFriends() {
    $.get(url, data => {        
        data.forEach(e => {
            $('#lista').append(`<li>${e.id} > ${e.name} <button onclick="deleteFriends(${e.id})">x</button></li>`); 
        });
    })
    $('#lista').empty();
}
$("#boton").click(showFriends);


function serchFriends() {
    let inp = $('#input').val();
    if(inp > 0 && inp < 7) {
        $.get(`${url}/${inp}`, data => {
            $('#amigo').text(`Buscaste a ${data.name}`);
            $('#input').val('')    
        })
    } else alert('Ingrese un ID de amigo válido')
    $('#input').val('') 
}
$("#search").click(serchFriends);


function deleteFriends(idFriends) {
    if(typeof idFriends !== 'number'){
    idFriends = $("#inputDelete").val();
    $("#inputDelete").val('');
    }   
    if(idFriends > 0 && idFriends < 7 ){
        let amigo;
        $.get(`${url}/${idFriends}`, f => {
            amigo = f
        })
        $.ajax({
            url: `${url}/${idFriends}`, 
            type: "DELETE",
            success: () => {
                $('#sucess').text(`Borraste a ${amigo.name}`);
                $('#inputDelete').val('')
                showFriends()
            }
        })
    } else alert('Ingrese un ID de amigo válido')
}
$("#delete").click(deleteFriends)
