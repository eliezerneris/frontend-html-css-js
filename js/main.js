function calculoHipotenusa(){
    let cateto1 = document.getElementById("cateto1").value;
    let cateto2 = document.getElementById("cateto2").value;
    let resultado = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2));
    document.getElementById("resposta_hipotenusa").innerHTML += "<h5 class='card-title'> Cateto a = "+cateto1+", Cateto b = "+cateto2+"</h5><class='card-text'> <b>Hipotenusa: </b>"+resultado+"</p><hr/>";
    limparCamposHipotenusa();
}

function limparCamposHipotenusa(){
    document.getElementById("cateto1").value = "";
    document.getElementById("cateto2").value = "";
}

function areaTriangulo(){
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let resultado = (base * altura)/2;
    document.getElementById("resposta_areaTriangulo").innerHTML += "<h5 class='card-title'> Base = "+base+", Altura = "+altura+"</h5><class='card-text'> <b>Area do Triangulo: </b>"+resultado+" (unidade)&sup2;</p><hr/>";
    limparCamposareaTriangulo();
}

function limparCamposareaTriangulo(){
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
}
