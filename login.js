
function consumirWebService(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for(let post of posts){
            //console.log(post.title);
        }}
    );
}
const letrasPattern=/^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;
var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let email = document.getElementById("email1");


document.getElementById("correo").addEventListener("focusout",function(){  
    

    let elementoMensajeN = document.getElementById("emailErroneo2");
    let nombre = document.getElementById("correo").value;
    if(nombre.length == 0){
        document.getElementById("correo").style.borderColor = "#ff0000";
    }else{
        document.getElementById("correo").style.borderColor = "#ffffff";
        
    }
});

document.getElementById("contra1").addEventListener("focusout",function(){  
    

    let elementoMensajeN = document.getElementById("contraMala");
    let nombre = document.getElementById("contra1").value;
    if(nombre.length == 0){
        document.getElementById("contra1").style.borderColor = "#ff0000";
    }else{
        document.getElementById("contra1").style.borderColor = "#ffffff";
        
    }
});

