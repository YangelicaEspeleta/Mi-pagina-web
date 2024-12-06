let operacion = '';

function menu(){

    operacion = promptI(`\nCalculadora Basica
        
        1 - suma
        2 - resta
        3 - multiplicacion
        4 - division
        0 - salir
        
        elija un opcion:`);

    if  (operacion == '1' || operacion == '2'||operacion == '3' || operacion == '4'){
        capturaDatos();
        menu();

    }else if ( operacion == '0' || operacion ==  null){
        alert('Fin de la operacion');

    }else{
        alert('Opcion NO valida');
        menu();
    }

}

function capturaDatos(){
    let num1, num2;
    while(isNaN(num1)){
        num1=prompt('Ingrese Primer numero:');

    }
    while(isNaN(num2)){
        num2 =prompt('Ingrese Segundo numero:');
    }
    realizarOperacion(Number(num1),Number(num2),operacion);

}
function realizarOperacion(num1,num2,operacion){
    if (operacion== '1') 
        alert (`El resultado de la SUMA es: ${num1+num2}`);
    else if (operacion =='2')
        alert (`El resultado de la RESTA es: ${num1-num2}`);
    else if( operacion =='3')
        alert(`El resultado de la MULTIPLICACION es: ${num1*num2}`);
    else if (operacion =='4'){
        if (num2 !== 0)
            alert(`El resultado de la Division es: ${num1/num2}`);
        else
        alert("no se admite division x 0");
    }
}

menu();
