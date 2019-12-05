function sumar(a, b) {
    return a + b;
}

let sumar = (a, b) => a + b;

let saludar = () => 'HOla Mundo';


let deadpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};