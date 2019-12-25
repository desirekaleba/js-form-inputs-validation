const my_form = document.querySelector("#my-form");
const message = document.querySelector("#message");
const name = document.querySelector("#name");
const email = document.querySelector("#email");


my_form.addEventListener("submit", onsubmit);

function onsubmit(e){

    //prevent the button to use the action attribute of the form
    e.preventDefault();

    //check if the inputs have thrown an error before 
    //to remove the borders if they are filled in something
    secondeTime(name);
    secondeTime(email);

    //check if the fields are not empty
    if(document.querySelector("#name").value === '' || 
        document.querySelector("#email").value === ''){

            //check if the name field is not empty
        if(document.querySelector("#name").value === '')
            document.querySelector("#name").classList.add("error-solid");

            // check if the email field is not empty
        if(document.querySelector("#email").value === '')
            document.querySelector("#email").classList.add("error-solid");

            /*
             * add the error class if at least one of the field is empty
             */
        message.classList.add("error");
        message.innerHTML = "All fields are required";

        //remove the error class after 3secondes to give the user another chance
        setTimeout(() => {
            //message.remove();
            message.classList.remove('error');
            message.innerHTML = "";
        }, 3000);

    }else{

        //validate the inputs
        message.classList.add("success");
        message.innerHTML = "Success";
        setTimeout(() => {
            //message.remove();
            message.classList.remove('success');
            message.innerHTML = "";
        }, 3000);
    }

    
}

//check if the field threw an error before
/**
 * 
 *if yes remove the class and start afresh
 */
function secondeTime(value){

    (Array.from(value.classList)).forEach((item) => {

        if(item === 'error-solid'){
            
            value.classList.remove('error-solid');
        }
    });
}