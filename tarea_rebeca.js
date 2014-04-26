//Jquery 
$(document).ready(function(){
 $('#Submit').click(function(){
    var Formulario = {
       Name: $('#name').val(),
       LastName: $('#lastName').val(),
       Age: $('#age').val(),
       Gender: $('#gender').val()
    }
    console.log(Formulario);
 });

});