



/*Js sign up*/

// take id for display in where do you want to show

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Take function inside div form and create fucntion 
form.addEventListener( 'submit' , (e) => {
  e.preventDefault(); //use to return the parent element of a particular child element
  checkInput(); //function
});

function checkInput(){

  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if ( fnameValue === ''){
  // show error
  // add error class
    setErrorFor( fname, 'First name cannot be blank');
  } else {
    //add success class
      setSuccessFor(fname);
  }

  if ( lnameValue === ''){
    // show error
    // add error class
      setErrorFor( lname, 'Last name cannot be blank');
    } else {
      //add success class
        setSuccessFor(lname);
    }
  
  if ( emailValue === ''){
      // show error
      // add error class
      setErrorFor( email, 'Email cannot be blank');
      
    }else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not Valid')
    }
    else {
        //add success class
        setSuccessFor(email);
    }

  if ( passwordValue === ''){
    // show error
    // add error class
      setErrorFor( password, 'Password cannot be blank');
    } else {
      //add success class
      setSuccessFor(password);
  }

  if ( password2Value === ''){
    // show error
    // add error class
      setErrorFor( password2, 'Password cannot be blank');

    } else if ( passwordValue !== password2Value ){
        setErrorFor( password2, 'Password does not match');
    }
    else {
      //add success class
      setSuccessFor(password2);
  }
  



  function  setErrorFor(input, message){
     
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message ;

    //add error class
    formControl.className = 'form-control error'

  }

  function  setSuccessFor( input ){
     
    const formControl = input.parentElement;

    //add error class
    formControl.className = 'form-control success'
  }
  function isEmail(email) 
    {
        var re = /\S+@\S+\.\S/;
        return re.test(email);
    }

}



