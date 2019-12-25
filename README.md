# JS fields(textFields) validation

Js fields validation is an example which validates form fields before submission.

It checks if the fields are not empty,
matches the email and more

## Technologies used

* html5
* css3
* JavaScript

### `index.html` file has the below content

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="author" content="Desire Kaleba">
        <meta name="description" content="Js fields validation example">
        <meta name="keywords" content="Js, javascript, validation, inputs, fields, input fields">

        <link rel="stylesheet" href="./style/default.css">

        <title>JS Inputs validation Example</title>
    </head>
    <body>
        <header>
            <div class="container">
                <h1>JS inputs validation Example</h1>
            </div>
        </header>
        <main>
            <section>
                <div class="container">
                    <form id="my-form" action="" method="POST">
                        <div id="message"></div>

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" class="form-controller"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" class="form-controller"/>
                        </div>
                        <button type="submit" class="btn">Submit</button>

                    </form>

                </div>
            </section>
        </main>

        <script src="./js/main.js"></script>
    </body>
</html>
```

### `default.css` file has the below content

```css
:root{
    --bg-color-primary :  #ccc;
    --color-primary : rgb(37, 164, 202);
    --color-secondary : rgb(25, 122, 146);
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height : 1.6;
    margin: 0;
    padding: 0;
}

header{
    background-color: var(--bg-color-primary);
}

.container{
    width : 80%;
    margin: 0 auto;
    padding: 1rem;
}

#my-form{
    background-color: var(--bg-color-primary);
    padding: 1rem;
    font-size: 1rem;
    font-weight: 500;
}

.form-group .form-controller{
    width: 100%;
    font-size: 1rem;
    font-weight: 100;
}

.form-controller{
    padding: 0.4rem;
    border-radius: 0.3rem;
}

.btn{
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 100;
    padding: 0.5rem;
    border: none;
    background-color : black;
    color: white;
}

.error{
    width: 100%;
    background-color: rgb(241, 35, 35);
    filter: blur(1);
    color: white;
    text-align: center;
    padding: 0.3rem 0.5rem;
    font-weight: 100;
    animation: error 0.5s ease;

}

.error-solid{
    border: 2px solid  rgb(241, 35, 35);
}

.success{
    width: 100%;
    background-color: rgb(19, 226, 98);
    color: white;
    text-align: center;
    padding: 0.3rem 0.5rem;
    font-weight: 100;
    animation: success 0.5s ease;

}

@keyframes error{
    from{
        opacity: 0.2;
        transform: rotate(90deg) translate3d(0,-100%,0);
    }
    to{
        opacity: 0.9;
        transform: translate3d(0,0,0);
    }
}
@keyframes success{
    from{
        opacity: 0.2;
        transform: rotate(360deg) translate3d(0,-100%,0);
    }
    to{
        opacity: 0.9;
        transform: translate3d(0,0,0);
    }
}

```

### `main.js` has the following content

```js

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
    if((document.querySelector("#name").value).trim() === '' ||
        (document.querySelector("#email").value).trim() === ''){

            //check if the name field is not empty
        if((document.querySelector("#name").value).trim() === '')
            document.querySelector("#name").classList.add("error-solid");

            // check if the email field is not empty
        if((document.querySelector("#email").value).trim() === '')
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
```
