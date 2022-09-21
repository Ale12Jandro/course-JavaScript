/*
A) 3 chicos entran a una heladería a comprar una nieve pero hay un problema: 
Los precios no están en cada estante de su respectivo sabor de helado.
Ellos quieren comprar el helado más caro con el dinero que tienen 

Solucionar el problema...

==Tabla de ayuda==

Roberto tiene $1.5 USD
Maria tiene $1.7 USD
Carlos tiene $3.0 USD

Los precios de las nieves son las siguientes: 

Paleta de hielo de agua: $0.6 USD 
Paleta de leche: $1 USD
Helado marca Magnum Clásica: $1.6 USD
Helado marca Magnum con almendras: $1.7 USD
Helado marca Magnum doble chocolate: $1.8 USD
Bote de Nieve marca Holanda Chocolate: $2.9 USD
Bote de Nieve marca Holanda Fresa: $ 2.9 USD 


CREAR SOLUCIONES: 

-Pedir la cantidad de dinero que tienen Carlos y sus amigos.
*/

dineroCarlos = prompt("¿Cuánto dinero tienes Carlos?");

//Solución para Carlos

dineroCarlos = parseInt(dineroCarlos);

if (dineroCarlos >= 0.6 && dineroCarlos < 1){
	alert("Debes comprar la Paleta de Hielo de Agua");

} 

else if (dineroCarlos >= 1 && dineroCarlos < 1.6){
	alert("Debes de comprar la Paleta de Leche");
	
}


else if (dineroCarlos >= 1.6 && dineroCarlos < 1.7){
	alert("Debes de comprar una Magnum Clásica");
	
}


else if (dineroCarlos >= 1.7 && dineroCarlos < 1.8){
	alert("Debes de comprar una Magnum de Almendras");

}


else if (dineroCarlos >= 1.8 && dineroCarlos < 2.9){
	alert("Debes de comprar una Magnum de Doble Chocolate");
	
}

else if (dineroCarlos >= 2.9){
	alert("Puedes comprar un bote de Nieve de Sabor Chocolate o Fresa");
	
}

else{
	alert("No tienes el suficiente dinero")
}


//Solucion para Maria
dineroMaria = prompt("¿Cuánto dinero tienes Maria?");

if (dineroMaria>= 0.6 && dineroMaria < 1){
	alert("Debes comprar la Paleta de Hielo de Agua");
} 

else if (dineroMaria >= 1 && dineroMaria < 1.6){
	alert("Debes de comprar la Paleta de Leche");
}


else if (dineroMaria >= 1.6 && dineroMaria < 1.7){
	alert("Debes de comprar una Magnum Clásica");
}


else if (dineroMaria >= 1.7 && dineroMaria < 1.8){
	alert("Debes de comprar una Magnum de Almendras");
}


else if (dineroMaria >= 1.8 && dineroMaria < 2.9){
	alert("Debes de comprar una Magnum de Doble Chocolate");
}

else if (dineroMaria >= 2.9){
	alert("Puedes comprar un bote de Nieve de Sabor Chocolate o Fresa");
}

else{
	alert("No tienes el suficiente dinero")
}


//Solucion para Roberto
dineroRoberto = prompt("¿Cuánto dinero tienes Roberto?");

if (dineroRoberto>= 0.6 && dineroRoberto < 1){
	alert("Debes comprar la Paleta de Hielo de Agua");
} 

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
	alert("Debes de comprar la Paleta de Leche");
}


else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
	alert("Debes de comprar una Magnum Clásica");
}


else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
	alert("Debes de comprar una Magnum de Almendras");
}


else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
	alert("Debes de comprar una Magnum de Doble Chocolate");
}

else if (dineroRoberto >= 2.9){
	alert("Puedes comprar un bote de Nieve de Sabor Chocolate o Fresa");
}

else{
	alert("No tienes el suficiente dinero")
}

