


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

consumirWebService();

 //document.getElementById("Name").style.borderColor = "#ffffff";


 document.getElementById("Name").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("mensajeNombre");
    let nombre = document.getElementById("Name").value;
    if(nombre.length == 0){
        document.getElementById("Name").style.borderColor = "#ff0000";
    }else{
        document.getElementById("Name").style.borderColor = "#ffffff";
        let correctoNombre = letrasPattern.test(nombre);
        if(correctoNombre == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});


document.getElementById("Contraseña1").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("contraseñaeronea");
    let contra = document.getElementById("Contraseña1").value;
    if(contra.length == 0){
        document.getElementById("Contraseña1").style.borderColor = "#ff0000";
    }else{
        document.getElementById("Contraseña1").style.borderColor = "#ffffff";
    }
});




document.getElementById("email1").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("emailErroneo");
    let nombre = document.getElementById("email1").value;
    if(nombre.length == 0){
        document.getElementById("email1").style.borderColor = "#ff0000";
    }else{
        document.getElementById("email1").style.borderColor = "#ffffff";
        
    }
});


document.getElementById("lastNameM").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("mensajeApellidoM");
    let nombre = document.getElementById("lastNameM").value;
    if(nombre.length == 0){
        document.getElementById("lastNameM").style.borderColor = "#ff0000";
    }else{
        document.getElementById("lastNameM").style.borderColor = "#ffffff";
        let correctoNombre = letrasPattern.test(nombre);
        if(correctoNombre == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});

document.getElementById("lastN").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("mensajeApellido");
    let nombre = document.getElementById("lastN").value;
    if(nombre.length == 0){
        document.getElementById("lastN").style.borderColor = "#ff0000";
    }else{
        document.getElementById("lastN").style.borderColor = "#ffffff";
        let correctoNombre = letrasPattern.test(nombre);
        if(correctoNombre == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});

document.getElementById("date1").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("dateFecha");
    let nombre = document.getElementById("date1").value;
    if(nombre.length == 0){
        document.getElementById("date1").style.borderColor = "#ff0000";
    }else{
        document.getElementById("date1").style.borderColor = "#ffffff";
        
    }
});