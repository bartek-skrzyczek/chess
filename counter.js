//set variable, which will contain the max amount of characters === 100;
var maxLength = 100;

//bind keyup event with textarea;
$('.js-textarea').on('keypress', function () {
 
//count the actual characters typed to textarea and store it to the variable;
 var length = $(this).val().length;
  
//count the remaining characters to type;
 var length = maxLength - length;
  
//place the result to the id = counter; 
 $('#counter').text(length);
 
//if the amount of characters is === 0, change the class;

});          
                   
                   



/*var maxLength = 100;$('textarea').keyup(function() {  var length = $(this).val().length;  var length = maxLength-length;  $('#chars').text(length);});
*/