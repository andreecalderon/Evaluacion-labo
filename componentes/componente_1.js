let componeDiv = document.createElement('div');
componeDiv.className = "header";

let img = document.createElement('img');
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfp5a7QSJsm9SyedbVfoByyUkgkwnc1Cggg&s";
img.className = "img-header";
componeDiv.appendChild(img);

let p = document.createElement('p');
p.className ="texto";
p.innerText = "este es el logo del header"
componeDiv.appendChild(p);



export {  componeDiv  };
