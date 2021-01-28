var dataBase = {
    wine: 10,
    peanut: 4.5,
    bread: 1,
    flour: 3,
    milk: 2,
    oil: 1.5,
    ketchup: 3.2,
    rice: 0.45,
    water: 1,
    chip: 2,
}

var precioTotal = 0.0;

function allowDrop(ev) {
    console.log("allow");
    ev.preventDefault();
}
  
function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
 
    var tipo = data.substring(0, data.length - 1);

    var precio = dataBase[tipo];

    precioTotal += precio;

    document.getElementById('pay').innerHTML= precioTotal.toFixed(2);
    
    console.log(precioTotal);

    document.getElementById("total");

    ev.target.appendChild(document.getElementById(data));
}

function remove() {
    var last = document.getElementById("shoppingBasket").parentElement;
    last.removeChild(document.getElementById("shoppingBasket"));
}

/*function remove () {
    var last = document.getElementById('shoppingBasket');
    document.body.removeChild(last.lastElementChild);
}*/