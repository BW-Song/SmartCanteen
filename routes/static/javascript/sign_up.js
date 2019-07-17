
/*validate the form of  the password*/
function validatePassword()
{
 
   var password = document.myForm.Password.value;
   
   if (password.length <= 5) 
   {
       alert("Please enter at least 6 characters!")
       document.myForm.Password.focus() ;
       return false;
   }
   if(password.search(/[A-Za-z]+/) == -1){
       alert("Your password should has at least one letter!");
       document.myForm.Password.focus() ;
       return false;
   }
   if(password.search(/\d/) == -1){
       alert("Your password should has at least one number!");
       document.myForm.Password.focus() ;
       return false;
   }
   return true;
}

/*check the repeated password is same to the first one or not*/
function checkPassword()
{
   var str1 = document.myForm.Password.value;
   var str2 = document.myForm.Password2.value;
   if (str1 != str2) 
   {
       alert("The repeated password is not same to the first one!");
       document.myForm.Password.focus() ;
       return false;
   }
   return true;
}

/*validate the form of  the email*/
function validateEmail()
{
 
   var emailID = document.myForm.Email.value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email")
       document.myForm.Email.focus() ;
       return false;
   }
   return( true );
}

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
   }else{
   if(validatePassword() == false)
    return false;
   }
   
   if( document.myForm.Password2.value == "" )
   {
     alert( "Please repeat your password!" );
     document.myForm.Password2.focus() ;
     return false;
   }else{
   if(checkPassword() == false)
   return false;
   }
   
   if( document.myForm.Email.value == "" )
   {
     alert( "Please provide your Email!" );
     document.myForm.Email.focus() ;
     return false;
   }else{
     // Put extra check for data format
     var ret = validateEmail();
     if( ret == false )
     {
          return false;
     }
   }
   
   if( document.myForm.Country.value == "-1" )
   {
     alert( "Please provide your country!" );
     return false;
   }
 return true;
}

function locate(){
var flag = validate();

if(flag == true){
 alert( "Submit successfully!" );
 document.location.href="home.html";
}
return false;	
}



