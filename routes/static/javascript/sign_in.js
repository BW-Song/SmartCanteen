
/*check whether all the fields have been filled*/
function validate()
{
   if( document.myForm.Name.value == "" )
   {
     alert( "Please provide your name!" );
     document.myForm.Name.focus() ;
     return false;
   }
   
   if( document.myForm.Password.value == "" )
   {
     alert( "Please provide your password!" );
     document.myForm.Password.focus() ;
     return false;
   }
   return true;
   
 }
 
 function locate(){
var flag = validate();

if(flag == true){
 alert("Sign in successfully!")
 document.location.href="home.html";
}
return false;	
}


   
   



