class bebida{
    constructor (nombre, precio, id){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.id = Number(id);
    }
}
const bebidas = [];

bebidas.push = new bebida ("Fernet", 3000, 1);

console.log(bebidas);