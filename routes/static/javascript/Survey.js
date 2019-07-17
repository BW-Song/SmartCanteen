/*check whether there are words in the field*/
function validate()
{
   if( document.getElementById("id1").value == "" )
   {
     alert( "Please write something here." );
     document.myForm.experience.focus() ;
     return false;
   }
   else return true;
 }
  
  function locate(){
  var flag = validate();

if(flag == true){
alert( "Submit successfully!" );
   document.location.href="home.html";
 }
 }