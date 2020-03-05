// creamos una nueva instancia para utilizar el framework de vue, donde vamos a tener toda la logica.
const app = new Vue({
    // el es una palabra reservada de vue para hacer referencia al id del contenedor significa element.
    //declaramos el id del contenedor donde queramos utilizar la logica de vue.js.
    el: '#app',
    //data que es otra palabra reservada es el contenedor de todos los datos, 
    //que es un objeto con todos los objetos dentro.
    data: {
        titulo: "Primer titulo con Vue.js",
        //Clave - valor. 
        alumnos: [
            'Carri',
            'Fernando',
            'Claudia',
            'Oscar',
            'Rafa',
            'Juani',
            'Laura',
            'Pablo',
            'Rodri',
            'Adri'
        ],
        colores: [
            'rojo',
            'azul',
            'verde',
            'amarillo',
            'naranja',
            'marron',
            'negro'
        ],
        estilos: [{
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2410/2410369.svg',
            nombre: 'Carri',
            estilo: 'Salsa',
            pro: false
        },
        {
            img: 'https://image.flaticon.com/icons/svg/599/599352.svg',
            nombre: 'Fernando',
            estilo: 'Flamenco',
            pro: true
        },
        {
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
            nombre: 'Claudia',
            estilo: 'Rock',
            pro: true
        },
        {
            img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
            nombre: 'Oscar',
            estilo: 'bachata',
            pro: true
        },
        {
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2410/2410369.svg',
            nombre: 'Rafa',
            estilo: 'Salsa',
            pro: true
        },
        {
            img: 'https://image.flaticon.com/icons/svg/599/599352.svg',
            nombre: 'Juani',
            estilo: 'Flamenco',
            pro: true
        },
        {
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
            nombre: 'Laura',
            estilo: 'Rock',
            pro: true
        },
        {
            img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
            nombre: 'Pablo',
            estilo: 'bachata',
            pro: true
        },
        {
            img: 'https://www.flaticon.com/premium-icon/icons/svg/2221/2221855.svg',
            nombre: 'Rodri',
            estilo: 'Rock',
            pro: true
        },
        {
            img: 'https://image.flaticon.com/icons/svg/122/122850.svg',
            nombre: 'Adri',
            estilo: 'bachata',
            pro: true
        }
        ],

        //en nuevo alumno vamos a recoger los datos del imput que se asocie con este.
        //siempre va a iniciarse como vacio.
        nuevoAlumno: '',
        nuevoEstilo: '',
        nuevaImagen: ''
    },
    //aqui en el methods vamos a tener los metodos que son funciones asociadas a la instancia de Vue.
    //hay varios metodos con palabra reservada.
    methods: {
        agregarAlumno() {
            console.log("hemos dado un click");
            //utilizamos la palabra this para poder llamar al objeto de la instancia.
            console.log(this.nuevoAlumno);
            this.estilos.push({
                nombre: this.nuevoAlumno,
                estilo: this.nuevoEstilo,
                pro: true,
                img: this.nuevaImagen
            })
            //iniciamos para que al refrescar la pagina no aparezcan insertados los nuevos alumnos.
            this.nuevoAlumno = '',
                this.nuevoEstilo = '',
                this.nuevaImagen = ''
        },

        //index es el parametro que nos indica la posicion que va a tener ese alumno para poder eliminarlo.
        eliminarAlumno: function (index) {
            console.log(this.estilos[0]);
            this.estilos.splice(index, 1);
        }
    }

})